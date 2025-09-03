import { useQuery } from "@tanstack/react-query";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import { getProviders } from "../../lib/services/api/usersApi";
import ProvidersList from "../../lib/components/admin/providers/providerList";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { apiClient } from "../../lib/services/api/serviceApi";

const ServiceProviders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getProviders", searchTerm],
    queryFn: async () => {
      let resp = await apiClient.get("all/providers", {
        params: { search: debouncedSearchTerm },
      });
      return resp.data;
    },
  });

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <div className="flex justify-between items-center">
          <p className="fw-600 text-xl">Manage Providers</p>
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
