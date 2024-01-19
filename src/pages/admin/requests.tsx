import React from "react";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import { getAllServices } from "../../lib/services/api/serviceApi";
import { useQuery } from "@tanstack/react-query";

const AdminRequests = () => {
  const { isLoading } = useQuery({
      queryKey: ["getServices"],
      queryFn: getAllServices,
    });
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <p className="fw-600 text-xl">Service Requests</p>
        <div className="mt-5 lg:mt-10">
          {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">
                  Fetching Service Requests...
                </p>
              </div>
            </div>
          )}
          {/* {isError && <p>Error Occured</p>}
              {data && !!data.users.length && <ProvidersList users={data?.users} />} */}
        </div>
      </div>
    </>
  );
};

export default AdminRequests;
