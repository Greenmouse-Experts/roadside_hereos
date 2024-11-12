import AdminPendingService from "../../lib/components/admin/services/RequestList";
import AdminOngoingService from "../../lib/components/admin/services/OngoingList";
import Tabs from "../../lib/components/ui/Tabs";
import AdminProcessingService from "../../lib/components/admin/services/ProcessingList";

const AdminRequests = () => {
  const tab = [
    {
      title: <>Pending</>,
      content: <AdminPendingService />,
    },
    {
      title: <>Processing Requests</>,
      content: <AdminProcessingService />,
    },
    {
      title: <>Ongoing Request</>,
      content: <AdminOngoingService />,
    },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <p className="fw-600 text-xl">Service Requests</p>
        <div className="mt-5 lg:mt-10">
          <Tabs tabs={tab} type="charts" />
        </div>
      </div>
    </>
  );
};

export default AdminRequests;
