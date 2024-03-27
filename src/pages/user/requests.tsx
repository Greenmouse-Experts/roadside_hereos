import { useQuery } from "@tanstack/react-query"
import Tabs from "../../lib/components/ui/Tabs"
import RequestList from "../../lib/components/user/requests/RequestList"
import { getMyServices } from "../../lib/services/api/serviceApi"

const UserRequests = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['getMyService'],
        queryFn: getMyServices
    })
    const tabs = [
        {
            title: <p>Pending</p>,
            content: <RequestList status="pending" data={data?.data} isLoading={isLoading}/>
        },
        {
            title: <p>Ongoing</p>,
            content: <RequestList status="ongoing" data={data?.data} isLoading={isLoading}/>
        },
        {
            title: <p>Completed</p>,
            content: <RequestList status="completed" data={data?.data} isLoading={isLoading}/>
        },
    ]
  return (
    <>
        <div className='bg-white p-2 lg:p-6 rounded-lg shadow min-h-[80vh]'>
            <Tabs tabs={tabs} type='charts'/>
        </div>
    </>
  )
}

export default UserRequests