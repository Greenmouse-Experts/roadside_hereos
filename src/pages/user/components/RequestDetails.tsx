import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../lib/services/api/serviceApi";
import { format_time } from "../../../utils/utils";

interface ServiceRequest {
  id: string;
  ref: null;
  userId: string;
  userType: "private_client";
  providerId: null;
  status: "pending";
  processStatus: null;
  serviceId: string;
  amount: null;
  vehicleMake: string;
  vehicleType: "car";
  model: string;
  vehicleYear: string;
  color: string;
  location: string;
  zipcode: string;
  requestNote: string;
  longitude: string;
  latitude: string;
  city: string;
  state: null;
  queryNote: null;
  userFcmToken: string;
  completionTime: null;
  createdAt: string;
  updatedAt: string;
  service: {
    id: string;
    name: string;
    slug: string;
    icon: string;
    isPublished: boolean;
    questionNote: string;
    createdAt: string;
    updatedAt: string;
  };
  payment: null;
}

interface PendingDetailsData {
  serviceRequest: ServiceRequest;
  driver: {};
  driverCompany: {};
  driverMoreInfo: {};
  driverQuote: null;
}
export default function PendingDetails({ id }: { id: string }) {
  const {
    data: payload,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pending-requests", id],
    queryFn: async () => {
      let resp = await apiClient.get(
        "/service-request/user-fetch-details/" + id,
      );
      return resp.data;
    },
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Error: {error?.message || "Failed to load details"}
      </div>
    );
  }
  const data = payload?.data;
  if (!data) {
    return <div className="text-center">No data available.</div>;
  }

  return (
    <div className="mb-4">
      <h1 className="text-md font-bold mb-2">Pending Request Details</h1>
      <div className="bg-white shadow-md rounded-lg">
        {/*<p>
          <span className="font-semibold">Service:</span>{" "}
          {data.serviceRequest?.service?.name}
        </p>*/}
        <p className="py-2 px-4 border-b border-gray-200">
          <span className="font-semibold">Created At:</span>{" "}
          {format_time(data.serviceRequest?.createdAt)}
        </p>
        <p className="py-2 px-4 border-b border-gray-200">
          <span className="font-semibold">Vehicle Make:</span>{" "}
          {data.serviceRequest?.vehicleMake}
        </p>
        <p className="py-2 px-4 border-b border-gray-200">
          <span className="font-semibold">Model:</span>{" "}
          {data.serviceRequest?.model}
        </p>
        <p className="py-2 px-4 border-b border-gray-200">
          <span className="font-semibold">Vehicle Year:</span>{" "}
          {data.serviceRequest?.vehicleYear}
        </p>
        <p className="py-2 px-4">
          <span className="font-semibold">Color:</span>{" "}
          {data.serviceRequest?.color}
        </p>
        {/* Display other relevant details here */}
      </div>
    </div>
  );
}
