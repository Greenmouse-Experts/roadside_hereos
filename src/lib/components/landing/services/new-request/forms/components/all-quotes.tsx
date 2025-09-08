import { useQuery } from "@tanstack/react-query";
import useRequestStore from "../../../../../../store/serviceStore";
import { apiClient } from "../../../../../../services/api/serviceApi";
import Button from "../../../../../ui/Button";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

interface Quote {
  id: string;
  serviceRequestId: string;
  quote: number;
  userId: string;
  selected: null;
  paid: null;
  longitude: string;
  latitude: string;
  distance: string;
  timeTaken: {
    "City driving car speed": string;
    "Highway driving car speed": string;
  };
  createdAt: string;
  updatedAt: string;
  driver: {
    id: string;
    fname: string;
    lname: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    sms_opt_in: boolean;
    password: string;
    isActive: boolean;
    isSuspended: boolean;
    photo: null;
    hasActiveSubscription: null;
    isAvailableForService: null;
    verified: boolean;
    expiredAt: null;
    planId: null;
    token: null;
    state: string;
    city: string;
    zipcode: string;
    street: null;
    userType: string;
    level: number;
    referralId: null;
    invitationId: string;
    companyId: string;
    reviewsAvg: number;
    serviceCharge: null;
    last_login: string;
    fcmToken: string;
    walletBal: string;
    pendingBal: string;
    referralSource: null;
    driverOverallPendingBal: string;
    driverOverallWalletBal: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
}

interface QuotesResponse {
  success: boolean;
  data: Quote[];
}
interface Props {
  countdown: number;
  setCountdown: (countdown: number) => void;
  open: (vend: any) => void;
  next: () => void;
}

const selected_driver_atom = atomWithStorage<Quote | null>(
  "selected_driver",
  null,
);
export const useDriver = () => {
  const [driver, setDriver] = useAtom(selected_driver_atom);
  return [driver, setDriver] as const;
};
export default function AllQuotes(props: Props) {
  const request = useRequestStore((state) => state.request);
  const [driver, setDriver] = useDriver();
  let request_id = request?.id;
  const quotes = useQuery<QuotesResponse>({
    queryKey: ["quotes", request_id],
    queryFn: async () => {
      const response = await apiClient.get(
        `/service-quote/fetch-quotes/${request_id}`,
      );
      return response.data;
    },
  });
  useEffect(() => {
    // if (isFetching) {
    //   setCountdown(count_default);
    // }
    if (props.countdown === 0 && !quotes.isFetching) {
      quotes.refetch();
    }
  }, [props.countdown, quotes.isFetching]);
  const data = quotes.data?.data;

  return (
    <div className="flex flex-col gap-2">
      {data?.map((quote) => (
        <div
          key={quote.id}
          className="bg-white flex rounded-lg shadow-md p-4 border border-gray-200" // Consistent card styling
        >
          <div className="flex-1">
            {" "}
            <p className="text-lg font-semibold text-gray-800">
              {" "}
              {/* Heading style */}
              Quote: <span className="font-medium">${quote.quote}</span>{" "}
            </p>
            <p className="text-base text-gray-700 mt-2">
              {" "}
              Driver: <span className="font-medium">{quote.driver.name}</span>
            </p>
            <p className="text-base text-gray-700 mt-2">
              Distance: <span className="font-medium">{quote.distance}</span>
            </p>
            <p className="text-base text-gray-700 mt-2">
              Time:{" "}
              <span className="font-medium">
                {quote.timeTaken["City driving car speed"]}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={async () => {
                try {
                  let resp = await apiClient.post(
                    `/service-quote/select-driver-quote/${quote.id}`,
                  );
                  setDriver(quote);

                  console.log(resp.data);
                  props.next();
                } catch (error) {
                  let message = error.response.data.message;
                  if (
                    message ==
                    "One other technician's quote has been selected initially."
                  ) {
                    setDriver(quote);
                    props.next();
                    return;
                  }
                }
                // Handle select action
              }}
              title={"Select"}
              className="bg-primary disabled:bg-gray-300 p-2 text-white cursor-pointer rounded-md text-sm ml-auto"
            >
              Select
            </button>
            <button
              onClick={async () => {
                return props.open(quote);
                try {
                  let resp = await apiClient.post(
                    `/service-quote/select-driver-quote/${quote.id}`,
                  );
                  console.log(resp.data);
                  return resp.data;
                } catch (error) {
                  console.log(error);
                }
              }}
              title={"Select"}
              className="bg-primary disabled:bg-gray-300 p-2 text-white cursor-pointer rounded-md text-sm ml-auto"
            >
              View On Map
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
