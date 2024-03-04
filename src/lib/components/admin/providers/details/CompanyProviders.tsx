import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getCompanyProviders } from "../../../../services/api/usersApi";
import StaffList from "./StaffList";
import EmptyState from "../../../ui/EmptyState";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";

interface Props {
  id: string;
}
const CompanyProviders: FC<Props> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getCompanyProviders(id),
    queryKey: ["companyProviders"],
  });
  return (
    <>
      <div className="bg-white p-6 shadow rounded min-h-[350px]">
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
        {data && !data?.data.length && (
          <div>
            <EmptyState msg="There are no providers currently in this company." />
          </div>
        )}
        {data && <StaffList data={data?.data} />}
      </div>
    </>
  );
};

export default CompanyProviders;
