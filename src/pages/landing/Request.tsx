import { BsClock } from "react-icons/bs";
import RequestForm from "../../lib/components/landing/services/RequestForm";
import LandingLayout from "../../lib/components/layout/landing";
import { useParams } from "react-router-dom";
import { getCategories } from "../../lib/services/api/serviceApi";
import { ServiceCatItem } from "../../lib/types/service";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useRequestStore from "../../lib/store/serviceStore";
import { RiDeleteBin5Fill } from "react-icons/ri";
import DownloadApp from "../../lib/components/landing/homepage/DownloadApp";

const RequestPage = () => {
  const { id } = useParams();
  const requestInfo = useRequestStore((store) => store.request);
  const clearRequest = useRequestStore((store) => store.clearRequest);
  const { data: service } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
  const [active, setActive] = useState<ServiceCatItem>();
  const getActiveService = () => {
    const activeService = service?.data?.filter(
      (where: ServiceCatItem) => where.id === id
    );
    setActive(activeService[0]);
  };
  useEffect(() => {
    if (service) {
      getActiveService();
    }
  }, [service]);
  return (
    <>
      <LandingLayout>
        <div>
          <div className="h-[250px] lg:h-[300px]  bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1705590870/rsh/Group_59_3_ewquaq.png')] lg:bg-fit">
            <div className="box h-full text-white flex items-center">
              <div>
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
                      Available 24/7 for emergency road service
                    </p>
                  </div>
                </div>
                <p className="text-3xl fw-700 mt-4">
                  Need Help Now? Request Our Expert Services.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div className="lg:w-11/12 mx-auto">
                <div className="flex justify-between items-center">
                  <p className="mb-4 text-lg lg:text-3xl fw-600">
                    Service: {active?.name}
                  </p>
                  {requestInfo.level > 0 && (
                    <p
                      onClick={clearRequest}
                      className="flex items-center gap-x-2 cursor-pointer text-red-600 fw-600 fs-500"
                    >
                      <RiDeleteBin5Fill /> Clear Request
                    </p>
                  )}
                </div>
                {active && (
                  <RequestForm
                    activeId={`${id}`}
                    activeQuestion={active?.questionNote}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <DownloadApp />
      </LandingLayout>
    </>
  );
};

export default RequestPage;
