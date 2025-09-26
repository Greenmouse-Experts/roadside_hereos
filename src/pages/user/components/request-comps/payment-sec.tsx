import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../../lib/services/api/serviceApi";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PAYMENT_KEY } from "../../../../lib/services/constant";
import CheckoutForm from "../../../../lib/components/landing/services/request/CheckoutForm";
import { useDriver } from "../../new-request";

interface PaymentDataV1 {
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

interface PaymentDataV2 {
  id: string;
  serviceRequestId: string;
  driverQuoteId: string;
  amount: number;
  amount_breakdown: {
    tax_amount: number;
    service_amount: number;
    subtotal: number;
  };
  client_secret: string;
  currency: string;
  status: string;
  created: number;
}

type PaymentData = PaymentDataV1 | PaymentDataV2;

interface PaymentResponse {
  success: boolean;
  message: string;
  data: PaymentData;
}

export default function PaymentSection() {
  const [driver] = useDriver();
  const driverId = driver?.id;

  const client_secret = useQuery<PaymentResponse>({
    queryKey: ["client_secret", driverId],
    queryFn: async () => {
      const response = await apiClient.post(
        "/service-quote/pay-selected-quote/" + driverId,
      );
      return response.data;
    },
    enabled: !!driverId,
  });

  if (!driverId) return null;
  if (client_secret.isLoading) return <div>Loading...</div>;
  if (client_secret.isError)
    return (
      <div className="p-4 text-red-600">Error loading payment details</div>
    );

  const data = client_secret.data?.data;
  if (!data) return <div>No payment data available</div>;

  const getClientSecret = (data: PaymentData): string => {
    if ("amount_breakdown" in data) {
      return data.client_secret;
    }
    return data.clientSecret;
  };

  return (
    <div className="font-sans p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Payment Details
      </h2>

      {/* ✅ Render based on type */}
      {"amount_breakdown" in data ? (
        <>
          <div className="space-y-4 text-gray-700">
            <Row label="Total" value={`$${data.amount} ${data.currency}`} />
            <Row
              label="Subtotal"
              value={`$${data.amount_breakdown.subtotal}`}
            />
            <Row label="Tax" value={`$${data.amount_breakdown.tax_amount}`} />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 text-gray-700">
            <Row label="Total" value={`$${data.amount}`} />
            <Row label="Tax" value={`$${data.tax}`} />
          </div>
        </>
      )}

      {/* Stripe Checkout */}
      {client_secret.isFetching ? (
        <div className="p-2 text-xl font-bold">Loading</div>
      ) : (
        !client_secret.isError && (
          <Checkout clientSecret={getClientSecret(data)} />
        )
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

const Checkout = (props: { clientSecret: string }) => {
  const stripePromise = loadStripe(PAYMENT_KEY);
  const options = { clientSecret: props.clientSecret };

  return (
    <div className="mt-4">
      {props.clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm prev={() => {}} secret_key={props.clientSecret} />
        </Elements>
      )}
    </div>
  );
};
