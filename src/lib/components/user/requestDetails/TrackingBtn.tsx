import { FC } from "react";
import io from "socket.io-client";
import useCustomModal from "../../../hooks/useCustomModal";
import DriverMapTracking from "./map-tracking";
import { MdLocationPin } from "react-icons/md";

const socket = io("https://api.alldrivesos.com");

interface Props {
  id: string;
  lat: string;
  lng: string;
}
const TrackingBtn: FC<Props> = ({ id, lat, lng }) => {
  
  const { Dialog: TrackModal, setShowModal: ShowTrackModal } = useCustomModal();
  return (
    <div>
      <div
        className="flex items-center gap-x-1 cursor-pointer mt-2 lg:mt-0 underline"
        onClick={() => ShowTrackModal(true)}
      >
        <MdLocationPin className="text-xl" />
        <p className="fs-600 fw-600">Track Driver Location</p>
      </div>
      <TrackModal title="" size="lg">
        <DriverMapTracking
          id={`${id}`}
          close={() => ShowTrackModal(false)}
          socket={socket}
          lat={lat}
          lng={lng}
        />
      </TrackModal>
    </div>
  );
};

export default TrackingBtn;
