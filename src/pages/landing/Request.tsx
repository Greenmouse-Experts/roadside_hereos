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
          <div className="min-h-screen  grid place-items-center p-4 bg-primary">
            <div className="flex flex-col items-center justify-center p-8 max-w-lg w-full bg-white rounded-xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-extrabold mb-3 text-gray-800 text-center">
                Ready to Get Back on the Road?
              </h2>
              <p className="text-lg mb-8 text-gray-600 text-center">
                Log in or create an account to quickly submit your service
                request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  className="bg-primary hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                  onClick={() => {
                    nav("/auth/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="border-2 border-amber-400 text-amber-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors duration-300 w-full sm:w-auto"
                  onClick={() => {
                    nav("/auth/register/user");
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </LandingLayout>
      </>
    );

  const requestInfo = useRequestStore((store) => store.request);
  const clearRequest = useRequestStore((store) => store.clearRequest);
  const [, setDriver] = useDriver();
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
        <div className="bg-gray-50 min-h-screen">
          <header className="py-16 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-3 p-2 bg-amber-50 border border-amber-200 rounded-full max-w-fit">
                    <BsClock className="text-amber-500 text-lg" />
                    <p className="text-sm font-medium text-amber-700">
                      Available 24/7 for emergency road service
                    </p>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                    Request Expert Roadside Assistance
                  </h1>
                </div>
                {requestInfo.level > 0 && (
                  <button
                    onClick={restart}
                    className="flex items-center gap-x-2 px-4 py-2 text-sm font-semibold rounded-lg text-red-600 border border-red-300 hover:bg-red-50 transition duration-200 shadow-sm"
                  >
                    <RiDeleteBin5Fill className="text-lg" /> Clear Current
                    Request
                  </button>
                )}
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Service Selection: {active?.name || "Loading..."}
              </h2>
              {active ? (
                <RequestForm
                  activeId={`${id}`}
                  activeQuestion={active?.questionNote}
                />
              ) : (
                <div className="text-center py-10 text-gray-500">
                  Loading service details...
                </div>
              )}
            </div>
          </main>
        </div>
        <DownloadApp />
      </LandingLayout>
    </>
  );
};

export default RequestPage;
