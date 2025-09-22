import { BsClock } from "react-icons/bs";
import RequestForm from "../../lib/components/landing/services/RequestForm";
import LandingLayout from "../../lib/components/layout/landing";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../lib/services/api/serviceApi";
import { ServiceCatItem } from "../../lib/types/service";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useRequestStore from "../../lib/store/serviceStore";
import { RiDeleteBin5Fill } from "react-icons/ri";
import DownloadApp from "../../lib/components/landing/homepage/DownloadApp";
import useAuthStore from "../../lib/store/userStore";
import { useDriver } from "../user/new-request";

const RequestPage = () => {
  const user = useAuthStore((state) => state.user.name.trim());
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    if (user) {
      nav("/user/new-request/" + id);
    }
  }, [user]);
  if (!user)
    return (
      <>
        <LandingLayout>
          <div className="min-h-screen grid  place-items-center">
            <div className="flex flex-col items-center justify-center p-2 max-w-xl shadow-md py-12">
              <h2 className="text-2xl font-bold mb-4 text-center">
                We are ready to serve you!
              </h2>
              <p className="text-lg mb-6 text-center">
                To Make a Request, login or sign up, it only takes a few minute,
                and well be on the way to help you.
              </p>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <button
                  className="bg-primary hover:bg-[#e0a263] text-white fw-600 py-3 px-6 rounded-lg transition-colors duration-200 w-full md:w-auto"
                  onClick={() => {
                    nav("/auth/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="border border-[#FEB470] text-[#FEB470] fw-600 py-3 px-6 rounded-lg hover:bg-[#FEB470] hover:text-white transition-colors duration-200 w-full md:w-auto"
                  onClick={() => {
                    nav("/auth/register/user");
                  }}
                >
                  Register as new user
                </button>
              </div>
            </div>
          </div>
        </LandingLayout>
      </>
    );

  const requestInfo = useRequestStore((store) => store.request);
  const clearRequest = useRequestStore((store) => store.clearRequest);
  const [driver, setDriver] = useDriver();
  const { data: service } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
  const [active, setActive] = useState<ServiceCatItem>();
  const getActiveService = () => {
    const activeService = service?.data?.filter(
      (where: ServiceCatItem) => where.id === id,
    );
    setActive(activeService[0]);
  };
  useEffect(() => {
    if (service) {
      getActiveService();
    }
  }, [service]);
  const restart = () => {
    clearRequest();
    setDriver(null);
    window.location.reload();
  };
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
                      onClick={restart}
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
