import { useQuery } from "@tanstack/react-query";
import PaymentList from "../../lib/components/user/payments/PaymentList";
import { getMyPayment } from "../../lib/services/api/clientApi";

const UserPayments = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['userPayment'],
        queryFn: getMyPayment
    })
    
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
            <p className="text-lg lg:p-2 lg:text-2xl fw-600">Service Payments</p>
            <div>
                <PaymentList isLoading={isLoading} data={data?.data}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default UserPayments;
