import { useState } from "react";
import { getAdminTransactions } from "../../../../services/api/adminApi";
import { useQuery } from "@tanstack/react-query";
import PaymentListing from "./paymentListing";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";
import EmptyState from "../../../ui/EmptyState";

const AdminServicePayout = () => {
  const [params, setParams] = useState({
    page: 1,
    status: "",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["admin-transactions", params],
    queryFn: () => getAdminTransactions(params),
  });
  const datas = data?.data?.trx;
  const count = data?.data?.total;

  const handleNext = () => {
    if (count > params.page * 10) {
      setParams({ ...params, page: params.page + 1 });
    }
  };

  const handlePrev = () => {
    if (params.page > 1) {
      setParams({ ...params, page: params.page - 1 });
    }
  };
  return (
    <>
      <div>
        <div className="">
          <div className="flex items-center justify-between">
            <p className="text-lg lg:p-2 lg:text-2xl fw-600">
              Payout Transactions
            </p>
          </div>
          <div>
            {!isLoading && !datas.length && (
              <div>
                <EmptyState msg="There currently is no payment record on the system." />
              </div>
            )}
            {isLoading && (
              <div className="py-12 flex justify-center items-center text-black">
                <div>
                  <div className="place-center">
                    <CurveLoader />
                  </div>
                  <p className="text-center mt-5 fw-500">
                    Fetching Payments Received...
                  </p>
                </div>
              </div>
            )}
            {!!datas?.length && (
              <PaymentListing
                isLoading={isLoading}
                data={datas || []}
                count={count || 0}
                page={params.page}
                next={handleNext}
                prev={handlePrev}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminServicePayout;
