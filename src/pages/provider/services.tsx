import Tabs from "../../lib/components/ui/Tabs";
import RenderedServices from "../../lib/components/provider/requests/RenderedList";

const ProviderServices = () => {
  const tabs = [
    {
      title: <p>Processing Service</p>,
      content: <RenderedServices status={'pending'}/>,
    },
    {
      title: <p>Ongoing Service</p>,
      content: <RenderedServices status="ongoing" />,
    },
    {
      title: <p>Fulfilled Service</p>,
      content: <RenderedServices status="fulfilled" />,
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
