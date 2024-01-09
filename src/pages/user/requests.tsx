import Tabs from "../../lib/components/ui/Tabs"
import RequestList from "../../lib/components/user/requests/RequestList"

const UserRequests = () => {
    const tabs = [
        {
            title: <p>Pending</p>,
            content: <RequestList status="pending"/>
        },
        {
            title: <p>Ongoing</p>,
            content: <RequestList status="ongoing"/>
        },
        {
            title: <p>Completed</p>,
            content: <RequestList status="completed"/>
        },
    ]
  return (
    <>
        <div className='bg-white p-6 rounded-lg shadow min-h-[80vh]'>
            <Tabs tabs={tabs} type='charts'/>
        </div>
    </>
  )
}

export default UserRequests