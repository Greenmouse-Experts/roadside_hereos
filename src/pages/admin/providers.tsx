import { useQuery } from "@tanstack/react-query";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import { getProviders } from "../../lib/services/api/usersApi";
import ProvidersList from "../../lib/components/admin/providers/providerList";

const ServiceProviders = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getProviders"],
    queryFn: getProviders,
  });
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <p className="fw-600 text-xl">Manage Providers</p>
        <div className="mt-5 lg:mt-10">
          {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">Fetching Users...</p>
              </div>
            </div>
          )}
          {isError && <p>Error Occured</p>}
          {data && !!data?.data.length && <ProvidersList users={data?.data} />}
        </div>
      </div>
    </>
  );
};

export default ServiceProviders;
