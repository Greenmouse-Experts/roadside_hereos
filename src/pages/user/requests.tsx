import Tabs from "../../lib/components/ui/Tabs";
import RequestList from "../../lib/components/user/requests/RequestList";

const UserRequests = () => {
  const tabs = [
    {
      title: <p>Processing</p>,
      content: <RequestList status="Pending" paymentStatus="Paid" />,
    },
    {
      title: <p>Ongoing</p>,
      content: <RequestList status="Ongoing" paymentStatus="Paid" />,
    },
    {
      title: <p>Fulfilled</p>,
      content: <RequestList status="fulfilled" paymentStatus="Paid" />,
    },
    {
      title: <p>Completed</p>,
      content: <RequestList status="completed" paymentStatus="Paid" />,
    },
  ];
  return (
    <>
      <div className="bg-white p-2 lg:p-6 rounded-lg shadow min-h-[80vh]">
        <Tabs tabs={tabs} type="charts" />
      </div>
    </>
  );
};

export default UserRequests;
