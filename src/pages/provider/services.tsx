import Tabs from "../../lib/components/ui/Tabs";
import RenderedServices from "../../lib/components/provider/requests/RenderedList";
import PendingService from "../../lib/components/provider/requests/RequestList";

const ProviderServices = () => {
  const tabs = [
    {
      title: <p>Rendered Service</p>,
      content: <RenderedServices status="completed" />,
    },
    {
      title: <p>Processed Service</p>,
      content: <RenderedServices status="processed" />,
    },
    {
      title: <p>Pending Service</p>,
      content: <PendingService />,
    },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <div className="mt-5">
          <Tabs tabs={tabs} type="charts" />
        </div>
      </div>
    </>
  );
};

export default ProviderServices;
