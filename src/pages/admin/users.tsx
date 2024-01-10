import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../lib/services/api/usersApi"
import UsersList from "../../lib/components/admin/users/UsersList"

const AdminUsers = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
  })
  return (
    <>
      <div className='bg-white p-6 rounded-lg shadow min-h-[80vh]'>
            <p className="fw-600 text-xl">User Management</p>
            <div className="mt-5 lg:mt-10">
              {
                isLoading && <p>Loading</p>
              }
              {
                isError && <p>Error Occured</p>
              }
              {
                data && !!data.users.length && <UsersList users={data?.users}/>
              }
            </div>
        </div>
    </>
  )
}

export default AdminUsers