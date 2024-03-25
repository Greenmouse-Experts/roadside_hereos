import { FC, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import useModal from "../../../../../hooks/useModal";
import MapLocation from "./MapLocation";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPostal: React.Dispatch<React.SetStateAction<string>>;
}
const GetCurrentLocation: FC<Props> = ({ setValue, setPostal }) => {
  const [isBusy, setIsBusy] = useState(false);
  const { Modal, setShowModal } = useModal();
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    setIsBusy(true);
    if (!geolocationAPI) {
      toast.error("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          fetchCoordinateDetails(coords);
        },
        (error) => {
          console.log(error);
          setIsBusy(false);
          toast.error("Something went wrong getting your position!");
        }
      );
    }
  };
  const fetchCoordinateDetails = async (data: GeolocationCoordinates) => {
    try {
      const response = await fetch(`https://geocode.maps.co/reverse?lat=${data.latitude}&lon=${data.longitude}&api_key=65a902d846b9f544820502crw54f601`, {
        method: "GET",
      });

      const result = await response.json();
      if (result) {
        toast.success(result?.message);
        setIsBusy(false);
          setValue(result?.display_name);
          setPostal(result?.address.postcode);
      }
    } catch (error: any) {
      setIsBusy(false)
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="grid gap-y-2 lg:flex items-center gap-x-6">
        <p
          className="flex gap-x-1 items-center fw-600 cursor-pointer"
          onClick={getUserCoordinates}
        >
          <FaMapMarkerAlt /> Get Current Location
        </p>
        <p
          className="flex gap-x-1 items-center fw-600 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <FaMapLocationDot /> Open Map
        </p>
      </div>
      {isBusy && (
        <div className="fixed top-0 left-0 place-center z-[30000] opacity-50 w-screen h-screen bg-white ">
          <BeatLoader size={34} />
        </div>
      )}
      <Modal title="" size="lg">
        <MapLocation setValue={setValue} />
      </Modal>
    </>
  );
};

export default GetCurrentLocation;
