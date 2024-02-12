import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProviderDetailsHeader from "../../lib/components/admin/providers/details/Header";
import CompanyDetails from "../../lib/components/admin/providers/details/CompanyDetails";
import ViewKyc from "../../lib/components/admin/providers/details/ViewKyc";
import CompanyProviders from "../../lib/components/admin/providers/details/CompanyProviders";
import Tabs from "../../lib/components/ui/Tabs";
import { getProvidersDetails } from "../../lib/services/api/usersApi";

const ProviderDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getProviders"],
    queryFn: () => getProvidersDetails(`${id}`),
  });
  const tabs = [
    {
      title: <p>Company Details</p>,
      content: <CompanyDetails data={data?.data}/>,
    },
    {
      title: <p>Company Providers</p>,
      content: <CompanyProviders id={`${id}`}/>,
    },
    {
      title: <p>Company Kyc</p>,
      content: <ViewKyc />,
    },
  ];
  return (
    <>
      {isLoading && <p>Loading</p>}
      {isError && <p>There was an issue fetching provider details</p>}
      {!isLoading && data && (
        <div>
          <div className="mb-16">
            <ProviderDetailsHeader
              picture={data?.data?.photo}
              name={data?.data?.name}
              status={data?.data?.isSuspended}
              id={`${id}`}
              email={data?.data?.email}
              refetch={refetch}
            />
          </div>
          <Tabs tabs={tabs} type="norm" />
        </div>
      )}
    </>
  );
};

export default ProviderDetails;
