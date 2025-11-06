import { useQuery } from "@tanstack/react-query";
import { format_time } from "../../../utils/utils";
import { apiClient } from "../../../lib/services/api/serviceApi";

interface ServiceData {
  id: string;
  ref: null;
  userId: string;
  userType: "private_client";
  providerId: null;
  status: "Paid";
  processStatus: null;
  serviceId: string;
  amount: number;
  vehicleMake: string;
  model: string;
  vehicleYear: number;
  color: string;
  location: string;
  zipcode: null;
  requestNote: string;
  createdAt: string;
  updatedAt: string;
  latitude: number;
  longitude: number;
  city: null;
  queryNote: null;
  userFcmToken: null;
  state: null;
  vehicleType: string;
  completionTime: null;
  serviceRequestId: string;
  driverQuoteId: string;
  companyCharge: number;
  charge: number;
  tax: number;
  paymentRef: string;
  clientSecret: string;
  driverChargeForAdmin: number;
  remitted: null;
  tax_breakdown: null;
  name: null;
  slug: number;
  icon: string;
  isPublished: number;
  questionNote: string;
  minimumQuote: null;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  isActive: number;
  isSuspended: number;
  token: null;
  street: null;
  referralId: null;
  level: number;
  hasActiveSubscription: null;
  isAvailableForService: null;
  expiredAt: null;
  planId: null;
  invitationId: null;
  verified: number;
  companyId: null;
  reviewsAvg: number;
  serviceCharge: null;
  fcmToken: string;
  pendingBal: null;
  address: string;
  deletedAt: null;
  photo: string;
  last_login: string;
  walletBal: null;
  referralSource: null;
  service_area: null;
  driverOverallPendingBal: null;
  driverOverallWalletBal: null;
  sms_opt_in: number;
  reason_for_suspension: null;
  reason_for_unsuspension: null;
  serviceRequestStatus: "cancelled";
  paymentStatus: "Paid";
  serviceRequestCreatedAt: string;
  serviceName: string;
}
[];

export default function AdminServiceRenderd(props: {
  serviceData: ServiceData[];
  id?: string;
}) {
  // const query = useQuery({
  //   queryKey: ["serviceData", props.id as string],
  //   queryFn: async () => {
  //     let resp = await apiClient.get(
  //       "/service-request/fetch-driver-service/" + props.id,
  //     );
  //     return resp.data;
  //   },
  // });
  const { serviceData } = props;
  // return <>{JSON.stringify(query.data)}</>;
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 ">
      {serviceData?.map((service) => (
        <li
          key={service.id}
          className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {service.serviceName}
          </h3>
          <p className="text-gray-700 mb-2">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                //@ts-ignore
                service.serviceRequestStatus === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : //@ts-ignore

                    service.serviceRequestStatus === "fulfilled" ||
                      //@ts-ignore
                      service.serviceRequestStatus === "completed"
                    ? "bg-green-100 text-green-800"
                    : service.serviceRequestStatus === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
              }`}
            >
              {service.serviceRequestStatus}
            </span>
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-gray-900">Fee:</span> $
            {service.amount.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-gray-900">Date:</span>{" "}
            {format_time(service.serviceRequestCreatedAt)}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-gray-900">Service Status:</span>{" "}
            {service.status}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Payment Status:</span>{" "}
            {service.paymentStatus}
          </p>
        </li>
      ))}
    </ul>
  );
}
