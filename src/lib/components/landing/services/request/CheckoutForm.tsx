import { Button } from "@material-tailwind/react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { FC } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Props {
  prev: () => void;
}
const CheckoutForm: FC<Props> = ({ prev }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="mt-16 flex justify-between">
        <Button onClick={prev} className="btn-feel flex gap-x-2 items-center">
          <FaArrowLeftLong /> Prev
        </Button>
        <Button type={"submit"} className="btn-feel flex gap-x-2 items-center">
          Next <FaArrowRightLong />
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
