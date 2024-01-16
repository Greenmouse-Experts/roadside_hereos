import { FC } from "react";
import CheckoutForm from "./CheckoutForm";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

interface Props {
  prev: () => void;
}
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

const PaymentSec: FC<Props> = ({ prev }) => {
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        // appearance: {
        //   /*...*/
        // },
      } as StripeElementsOptions;
  return (
    <>
      <div className="bg-gray-100 min-h-[450px] lg:p-16 lg:pb-20 p-4 pb-8 rounded-md">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm prev={prev}/>
        </Elements>
      </div>
    </>
  );
};

export default PaymentSec;
