import { useQuery } from "@tanstack/react-query";
import { ServiceCatItem } from "../../../types/service";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";
import { FaTimes } from "react-icons/fa";
import Button from "../../ui/Button";
import { getCompanyCategories } from "../../../services/api/serviceApi";
import useModal from "../../../hooks/useModal";
import AddNewSeviceModal from "./services/addNewModal";

const ServicesAdded = () => {
  const { data: service, isLoading, refetch } = useQuery({
    queryKey: ["getCompCat"],
    queryFn: getCompanyCategories,
  });
  const {Modal:Add, setShowModal:ShowAdd} = useModal()
  return (
    <>
      <div className="bg-gray-100 p-4 rounded min-h-[300px]">
        <p className="lg:text-lg fw-600">Services Rendered</p>
        <div className="mt-5">
          {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="flex place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">
                  Fetching Services...
                </p>
              </div>
            </div>
          )}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-4">
            {service &&
              service.data.length &&
              service.data.map((item: ServiceCatItem) => (
                <div className="bg-white relative flex gap-x-2 items-center p-2 shadow">
                  <div className="w-12">
                    <img src={item.icon} alt="icon" className="w-full" />
                  </div>
                  <div>
                    <p className="fw-500">{item.name}</p>
                  </div>
                  <div className="w-8 h-8 circle place-center bg-light cursor-pointer absolute -top-2 -right-1">
                    <FaTimes className="text-red-600" />
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-12 lg:col-span-2">
                <Button title={'Add New'} altClassName="btn-primary px-6 py-2"/>
              </div>
          </div>
        </div>
        <Add title="Add New Service">
            <AddNewSeviceModal close={() => ShowAdd(false)} refetch={refetch}/>
        </Add>
      </div>
    </>
  );
};

export default ServicesAdded;
