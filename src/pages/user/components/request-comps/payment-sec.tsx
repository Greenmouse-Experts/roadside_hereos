import { useQuery } from "@tanstack/react-query";
import { useDriver } from "../../../../lib/components/landing/services/new-request/forms/components/all-quotes";
import { apiClient } from "../../../../lib/services/api/serviceApi";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PAYMENT_KEY } from "../../../../lib/services/constant";
import CheckoutForm from "../../../../lib/components/landing/services/request/CheckoutForm";
interface PaymentData {
  id: string;
  serviceRequestId: string;
  driverQuoteId: string;
  amount: number;
  companyCharge: number;
  charge: number;
  tax: number;
  userId: string;
  f: string;
  paymentRef: string;
  status: string;
  driverChargeForAdmin: number;
  remitted: null | any;
  createdAt: string;
  updatedAt: string;
  clientSecret: string;
}

interface PaymentResponse {
  success: boolean;
  message: string;
  data: PaymentData;
}
export default function PaymentSection() {
  const [driver] = useDriver();
  const client_secret = useQuery<PaymentResponse>({
    queryKey: ["client_secret", driver?.id],
    queryFn: async () => {
      const response = await apiClient.post(
        "/service-quote/pay-selected-quote/" + driver.id,
      );
      return response.data;
    },
    enabled: !!driver,
  });
  const prev = () => {};

  if (!driver) return null;
  const temp = client_secret.data;
  const data = temp?.data;
  if (!data) {
    return <div className="p-4 text-gray-600">Loading payment details...</div>;
  }
  if (client_secret.isFetching) {
    return <>loading</>;
  }
  if (!client_secret.data?.data) {
    return <>no data</>;
  }
  if (client_secret.isError) {
    return (
      <div className="p-4 text-red-600">Error loading payment details</div>
    );
  }
  if (!data || !data.id) {
    return <div className="p-4 text-gray-600">No payment data available</div>;
  }
  const stripePromise = loadStripe(PAYMENT_KEY);

  const options = {
    clientSecret: data.clientSecret,
  };
  return (
    <div className="font-sans p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Payment Details
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">ID:</span>
          <span>{data.id}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Service Request ID:</span>
          <span>{data.serviceRequestId}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Driver Quote ID:</span>
          <span>{data.driverQuoteId}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Amount:</span>
          <span>${data.amount}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Company Charge:</span>
          <span>${data?.companyCharge}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Charge:</span>
          <span>${data.charge}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Tax:</span>
          <span>${data.tax}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Status:</span>
          <span className="capitalize">{data.status}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Payment Ref:</span>
          <span>{data.paymentRef}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Created At:</span>
          <span>{new Date(data.createdAt).toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Updated At:</span>
          <span>{new Date(data.updatedAt).toLocaleString()}</span>
        </div>
      </div>
      <div className="mt-4">
        {data && options.clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm prev={prev} secret_key={data.clientSecret} />
          </Elements>
        )}
      </div>
    </div>
  );
}
