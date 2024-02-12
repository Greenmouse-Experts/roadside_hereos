import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import ProviderDetailsHeader from "../../lib/components/admin/providers/details/Header";
import CompanyDetails from "../../lib/components/admin/providers/details/CompanyDetails";
import ViewKyc from "../../lib/components/admin/providers/details/ViewKyc";
import CompanyProviders from "../../lib/components/admin/providers/details/CompanyProviders";
import Tabs from "../../lib/components/ui/Tabs";
import { getProvidersDetails } from "../../lib/services/api/usersApi";

const ProviderDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery({
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
      content: <CompanyProviders />,
    },
    {
      title: <p>Company Kyc</p>,
      content: <ViewKyc />,
    },
  ];
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && data && (
        <div>
          <div className="mb-16">
            <ProviderDetailsHeader
              picture=""
              name="Mi"
              status="active"
              id={`${id}`}
              email={""}
            />
          </div>
          <Tabs tabs={tabs} type="norm" />
        </div>
      )}
    </>
  );
};

export default ProviderDetails;
