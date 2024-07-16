import Tabs from "../../ui/Tabs";
import RefundPendingRequest from "./pendingRequest";

const RefundIndex = () => {
  const refundTabs = [
    {
      title: <>Pending</>,
      content: <RefundPendingRequest/>,
    },
    {
      title: <>Approved</>,
      content: <></>,
    },
    {
      title: <>Declined</>,
      content: <></>,
    },
  ];
  return (
    <div>
      <Tabs tabs={refundTabs} type="charts" />
    </div>
  );
};

export default RefundIndex;
