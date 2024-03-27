import { useQuery } from "@tanstack/react-query";
import PaymentListing from "../../lib/components/admin/payments/paymentListing";
import { getAllPayments } from "../../lib/services/api/serviceApi";

const AdminPayments = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['adminPayment'],
        queryFn: getAllPayments
    })
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
            <p className="text-lg lg:p-2 lg:text-2xl fw-600">Service Payments</p>
            <div>
                <PaymentListing isLoading={isLoading} data={data?.data}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default AdminPayments