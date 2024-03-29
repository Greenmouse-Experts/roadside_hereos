import { FC, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { initiatePay } from "../../../../services/api/serviceApi";
import useRequestStore from "../../../../store/serviceStore";

interface Props {
  prev: () => void;
}
const stripePromise = loadStripe("pk_test_51HoQfvKiOZXcwcTbQS0xwfzkxRYCPWQ7VT4Xl6sObmhguPXhX5agZY88UrCsPcAQLKa071M8lQh3kA6DMe42L7IB00ibW8gtHu");

const PaymentSec: FC<Props> = ({ prev }) => {
    const [payDetails, setPayDetails] = useState<any>()
    const request = useRequestStore((state) => state.request)
    // const [showStripe, setShowStripe] = useState(false)
    const getPayDetails = () => {
      initiatePay(request.qouteId)
      .then((data) => {
          setPayDetails(data.data)
      })
    }
    useEffect(() => {
      if(!payDetails){
        getPayDetails()
      }
    },[request])
    const options = {
        clientSecret: `${payDetails?.client_secret}`,
        // Fully customizable with appearance API.
        // appearance: {
        //   /*...*/
        // },
      }
  return (
    <>
      <div className="bg-gray-100 min-h-[450px] lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        {payDetails && <Elements stripe={stripePromise} options={options}>
          <CheckoutForm prev={prev} secret_key={payDetails || ''}/>
        </Elements>}
      </div>
    </>
  );
};

export default PaymentSec;
