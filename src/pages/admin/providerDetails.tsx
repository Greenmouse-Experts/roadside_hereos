import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProviderDetailsHeader from "../../lib/components/admin/providers/details/Header";
import CompanyDetails from "../../lib/components/admin/providers/details/CompanyDetails";
import ViewKyc from "../../lib/components/admin/providers/details/ViewKyc";
import CompanyProviders from "../../lib/components/admin/providers/details/CompanyProviders";
import Tabs from "../../lib/components/ui/Tabs";
import { getProvidersDetails } from "../../lib/services/api/usersApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";

const ProviderDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getProviders"],
    queryFn: () => getProvidersDetails(`${id}`),
  });
  const tabs = [
    {
      title: <p>Company Details</p>,
      content: <CompanyDetails data={data?.data} />,
    },
    {
      title: <p>Company Drivers</p>,
      content: <CompanyProviders id={`${id}`} />,
    },
    {
      title: <p>Company KYC</p>,
      content: (
        <ViewKyc id={`${id}`} kyc={data?.data?.verified} refetch={refetch} />
      ),
    },
  ];

  console.log(data);
  return (
    <>
      {isLoading && (
        <div className="py-12 flex justify-center items-center text-black">
          <div>
            <div className="flex justify-center">
              <CurveLoader />
            </div>
            <p className="text-center mt-5 fw-500">
              Fetching Provider Details...
            </p>
          </div>
        </div>
      )}
      {isError && <p>There was an issue fetching provider details</p>}
      {!isLoading && data && (
        <div>
          <div className="mb-24 lg:mb-16">
            <ProviderDetailsHeader
              picture={data?.data?.photo}
              name={data?.data?.name}
              status={data?.data?.isActive}
              id={`${id}`}
              email={data?.data?.email}
              refetch={refetch}
              pendingBal={data?.data?.pendingBal}
              walletBal={data?.data?.walletBal}
            />
          </div>
          <Tabs tabs={tabs} type="norm" />
        </div>
      )}
    </>
  );
};

export default ProviderDetails;
