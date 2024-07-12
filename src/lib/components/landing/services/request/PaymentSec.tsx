import { FC, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { initiatePay } from "../../../../services/api/serviceApi";
import useRequestStore from "../../../../store/serviceStore";
import { formatNumber } from "../../../../utils";
import { PAYMENT_KEY } from "../../../../services/constant";

interface Props {
  prev: () => void;
}
const stripePromise = loadStripe(PAYMENT_KEY);

const PaymentSec: FC<Props> = ({ prev }) => {
  const [payDetails, setPayDetails] = useState<any>();
  const request = useRequestStore((state) => state.request);
  // const [showStripe, setShowStripe] = useState(false)
  const getPayDetails = () => {
    initiatePay(request.qouteId).then((data) => {
      setPayDetails(data.data);
    });
  };
  useEffect(() => {
    if (!payDetails) {
      getPayDetails();
    }
  }, [request]);
  const options = {
    clientSecret: payDetails?.client_secret? `${payDetails?.client_secret}` : `${payDetails?.clientSecret}`,
    // Fully customizable with appearance API.
    // appearance: {
    //   /*...*/
    // },
  };
  return (
    <>
      <div className="bg-gray-100 min-h-[450px] lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        {payDetails && (
          <div className="grid gap-2 bg-primary text-white p-4 rounded mb-5">
            <div className="flex justify-between">
              <p className="fw-500">Service Fee:</p>
              <p className="fw-600 fs-700">${payDetails?.amount_breakdown?.subtotal? formatNumber(payDetails?.amount_breakdown?.subtotal) : payDetails?.amount}</p>
            </div>
            <div className="flex justify-between">
              <p className="fw-500">AllDriveSOS Fee:</p>
              <p className="fw-600 fs-700">${payDetails?.amount_breakdown?.service_amount? formatNumber(payDetails?.amount_breakdown?.service_amount) : formatNumber(payDetails?.charge)}</p>
            </div>
            <div className="flex justify-between">
              <p className="fw-500">VAT:</p>
              <p className="fw-600 fs-700">${formatNumber(payDetails?.amount_breakdown?.tax_amount) || formatNumber(payDetails?.tax)}</p>
            </div>
            <div className="flex justify-between border-t-2 border-gray-300 pt-2">
              <p className="fw-500">Total:</p>
              <p className="fw-600 fs-700">${formatNumber(payDetails?.amount)}</p>
            </div>
          </div>
        )}
        {payDetails && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm prev={prev} secret_key={payDetails || ""} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default PaymentSec;
