import axios from "axios";
import { FC, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import useModal from "../../../../../hooks/useModal";
import MapLocation from "./MapLocation";

interface Props {
    setValue: React.Dispatch<React.SetStateAction<string>>
}
const GetCurrentLocation:FC<Props> = ({setValue}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const {Modal, setShowModal} = useModal()
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    setIsBusy(true);
    if (!geolocationAPI) {
      toast.error("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLocation(coords);
          fetchCoordinateDetails(coords);
        },
        (error) => {
          console.log(error);
          toast.error("Something went wrong getting your position!");
        }
      );
    }
  };
  console.log(location);
  const fetchCoordinateDetails = async (data: GeolocationCoordinates) => {
    await axios
      .get(
        `https://geocode.maps.co/reverse?lat=${data.latitude}&lon=${data.longitude}&api_key=65a902d846b9f544820502crw54f601`,
        {
          headers: {
            Authorization: null,
          },
        }
      )
      .then((response) => {
        response.data;
        if (response.data) {
            console.log(response.data);
            const data = response.data; 
          setIsBusy(false);
          setValue(data.display_name)
        }
      });
  };

  return (
    <>
      <div className="flex items-center gap-x-6">
        <p
          className="flex gap-x-1 items-center fw-600"
          onClick={getUserCoordinates}
        >
          <FaMapMarkerAlt /> Get Coordinates
        </p>
        <p className="flex gap-x-1 items-center fw-600">
          <FaMapLocationDot /> Open Map
        </p>
      </div>
      {isBusy && (
        <div className="fixed top-0 left-0 place-center z-[30000] opacity-50 w-screen h-screen bg-white ">
          <BeatLoader size={34} />
        </div>
      )}
      
      <Modal title="" size="lg">
        <MapLocation setValue={setValue}/>
      </Modal>
    </>
  );
};

export default GetCurrentLocation;
