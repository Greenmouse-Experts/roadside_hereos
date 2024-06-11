import { useQuery } from "@tanstack/react-query";
import PaymentListing from "../../lib/components/admin/payments/paymentListing";
import { getAdminPayments } from "../../lib/services/api/adminApi";
import { useState } from "react";
import EmptyState from "../../lib/components/ui/EmptyState";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";

const AdminPayments = () => {
  const [params, setParams] = useState({
    page: 1,
    status: "pending",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["adminPayment", params],
    queryFn: () => getAdminPayments(params),
  });
  const datas = data?.data?.payments;
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
        <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
          <p className="text-lg lg:p-2 lg:text-2xl fw-600">Service Payments</p>
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
           {!!datas?.length && <PaymentListing
              isLoading={isLoading}
              data={datas || []}
              count={count || 0}
              page={params.page}
              next={handleNext}
              prev={handlePrev}
            />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPayments;
