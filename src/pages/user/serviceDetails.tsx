import { useParams } from "react-router-dom";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import { Rating } from "@material-tailwind/react";
import { MdLocationPin } from "react-icons/md";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div className="pb-24">
      <div className="flex justify-between items-start">
        <div>
          <p>
            Service Id: <span className="uppercase fw-600">{id}</span>
          </p>
          <p className="fw-500 mt-2 text-lg lg:text-2xl">
            Emergency Towing Service
          </p>
        </div>
        <div className="flex items-center gap-x-1 underline">
          <MdLocationPin className="text-xl" />
          <p className="fs-600 fw-600">Track Location</p>
        </div>
      </div>
      <div className="bg-gray-100 mt-6 rounded-lg p-4">
        <div className="flex justify-between">
          <p className="fw-500 flex items-center gap-x-1 text-lg">
            <span className="block w-4 h-4 circle bg-primary"></span> Provider
            Details
          </p>
          <p className="fw-500 underline">Submit a Query</p>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-x-3">
            <ProfileAvatar
              url={""}
              name="Enzo Fernandez"
              size={100}
              font={30}
            />
            <div>
              <p className="fw-500 mb-2 text-lg">Enzo Fernandez</p>
              <Rating value={4} />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-6">
          <div className="grid gap-5">
            <div className="flex gap-x-2">
              <p>Company:</p>
              <p className="fw-500">Greenmouse Technology</p>
            </div>
            <div className="flex gap-x-2">
              <p>Car Description:</p>
              <p className="fw-500">Black toyata camry 2015</p>
            </div>
            <div className="flex gap-x-2">
              <p>Plate Number:</p>
              <p className="fw-500">CA-32899</p>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="flex gap-x-2">
              <p>Service Cost:</p>
              <p className="fw-500">$480</p>
            </div>
            <div className="flex gap-x-2">
              <p>Contact Info:</p>
              <p className="fw-500">+1 (419) 456 5566</p>
            </div>
            <div className="flex gap-x-2">
              <p>Addition Info:</p>
              <p className="fw-500"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-6 rounded-lg p-4">
        <div className="flex justify-between">
          <p className="fw-500 flex items-center gap-x-1 text-lg">
            <span className="block w-4 h-4 circle bg-primary"></span> Service
            Details
          </p>
        </div>
        <div className="grid lg:grid-cols-3 mt-6">
          <div className="grid gap-5">
            <div className="flex gap-x-2">
              <p>Car Make:</p>
              <p className="fw-500">Toyotal</p>
            </div>
            <div className="flex gap-x-2">
              <p>Car Model:</p>
              <p className="fw-500">Camry</p>
            </div>
            <div className="flex gap-x-2">
              <p>Car Year:</p>
              <p className="fw-500">2899</p>
            </div>
            <div className="flex gap-x-2">
              <p>Car Color:</p>
              <p className="fw-500">Black Matte</p>
            </div>
          </div>
          <div className="grid gap-5 lg:col-span-2">
            <div className="flex gap-x-2">
              <p>Service Location:</p>
              <p className="fw-500">
                Aguda, Ikeja, Lagos State, 100282, Nigeria.
              </p>
            </div>
            <div className="flex gap-x-2">
              <p>Servie Info:</p>
              <p className="fw-500">Tow to Lekki Phase 1</p>
            </div>
            <div className="flex gap-x-2">
              <p>Request Time:</p>
              <p className="fw-500">15:05, Wednesday 23, March 2024.</p>
            </div>
            <div className="flex gap-x-2">
              <p>Response Time:</p>
              <p className="fw-500">15:05, Wednesday 23, March 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
