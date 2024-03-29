import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../lib/services/api/usersApi";
import UsersList from "../../lib/components/admin/users/UsersList";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import EmptyState from "../../lib/components/ui/EmptyState";

const AdminUsers = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <p className="fw-600 text-xl">User Management</p>
        <div className="mt-5 lg:mt-10">
          {isLoading && (
            <div className="py-12 flex justify-center items-center text-black">
              <div>
                <CurveLoader />
                <p className="text-center mt-5 fw-500">Fetching Users...</p>
              </div>
            </div>
          )}
          {data && !data?.data.length && (
            <div>
              <EmptyState msg="There's no users currently on the system." />
            </div>
          )}
          {isError && <p>Error Occured</p>}
          {data && !!data?.data.length && <UsersList users={data?.data} />}
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
