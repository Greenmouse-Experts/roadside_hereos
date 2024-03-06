import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminRequests } from "../../lib/services/api/serviceApi";
import EmptyState from "../../lib/components/ui/EmptyState";
import AdminPendingService from "../../lib/components/admin/services/RequestList";

const AdminRequests = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getServices"],
    queryFn: () => fetchAdminRequests("pending"),
  });
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <p className="fw-600 text-xl">Pending Service Requests</p>
        <div className="mt-5 lg:mt-10">
          {data && !data?.data.length && (
            <div>
              <EmptyState msg="There's no pending request currently on the system." />
            </div>
          )}
          {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <div className="place-center">
                  <CurveLoader />
                </div>
                <p className="text-center mt-5 fw-500">
                  Fetching Pending Service Requests...
                </p>
              </div>
            </div>
          )}
          {data && !!data.data.length && (
            <AdminPendingService data={data?.data} />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminRequests;
