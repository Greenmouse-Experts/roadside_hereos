import CompanyPayoutRequest from "../../lib/components/admin/payout/companyPayoutRequest";
import ApprovedRequests from "../../lib/components/admin/payout/companyPayoutRequest";
import DisapprovedRequests from "../../lib/components/admin/payout/disapprovedRequest";
import Tabs from "../../lib/components/ui/Tabs";

const CompanyPayouts = () => {
  const payTabs = [
    {
      title: <p>Payout Requests</p>,
      content: <CompanyPayoutRequest />,
    },
    {
      title: <p>Approved Payouts</p>,
      content: <ApprovedRequests />,
    },
    {
      title: <p>Disapproved Payouts</p>,
      content: <DisapprovedRequests />,
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
      <div className="mt-5">
        <Tabs tabs={payTabs} type="charts" />
      </div>
    </div>
  );
};

export default CompanyPayouts;
