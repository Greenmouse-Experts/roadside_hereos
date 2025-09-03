import { useCallback, useState, useEffect } from "react";
import { useLocation } from "../../request/ServiceSec";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../../../services/api/serviceApi";
import useRequestStore from "../../../../../store/serviceStore";
import ReusableModal from "../../../../ui/ReusableModal";
import ViewOnMap from "./ViewOnMap";
import useDialog from "../../../../../hooks/useDialog";
import { Portal } from "../../../../portal/portal";
const containerStyle = {
  width: "100%",
  height: "400px",
};
interface ServiceRendered {
  id: string;
  fee: number;
}

interface Location {
  type: string;
  coordinates: number[];
}

interface Profile {
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
  photo: any;
  hasActiveSubscription: any;
  isAvailableForService: any;
  verified: boolean;
  expiredAt: any;
  planId: any;
  token: any;
  state: string;
  city: string;
  zipcode: string;
  street: any;
  userType: string;
  level: number;
  referralId: any;
  invitationId: string;
  companyId: string;
  reviewsAvg: number;
  serviceCharge: any;
  last_login: string;
  fcmToken: string;
  walletBal: string;
  pendingBal: string;
  referralSource: any;
  driverOverallPendingBal: string;
  driverOverallWalletBal: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

export interface Vendor {
  id: string;
  user_id: string;
  brands: string[];
  service_rendered: ServiceRendered[];
  account_name: string;
  account_number: string;
  bank_name: string;
  routing_number: string;
  service_area: string;
  fees: any;
  isVerified: boolean;
  reason: string;
  car_description: string;
  plate_number: string;
  longitude: string;
  latitude: string;
  zipcode: string;
  city: string;
  stripeAccountId: string;
  identityFront: string;
  identityBack: string;
  identityFrontId: string;
  identityBackId: string;
  cityOfResidence: string;
  state: string;
  dob: string;
  ssn_last_4: string;
  device_ip: string;
  phone_number: string;
  location_status: string;
  location: Location;
  location_last_updated: string;
  createdAt: string;
  updatedAt: string;
  distance_in_km: number;
  profile: Profile;
}

interface VendorResponse {
  success: boolean;
  message: string;
  data: {
    vendors: Vendor[];
    total: number;
  };
}

export default function NewProviderList({ next }: { next: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [radius, setRadius] = useState(40); // Default radius in miles
  const [location] = useLocation();
  const request = useRequestStore((state) => state.request);
  let request_id = request?.id;
  const center = {
    lat: parseFloat(location?.latitude) || -34.397,
    lng: parseFloat(location?.longitude) || 150.644,
  };
  const close = () => {
    setIsOpen(false);
    setVendor(null);
  };
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { data, refetch, isFetching } = useQuery<VendorResponse>({
    queryKey: ["vendors", location, radius],
    queryFn: async () => {
      const response = await apiClient.post(
        `/service-request/service-information/${request_id}/notify?latitude=${center?.lat}&longitude=${center?.lng}&prev_radius=1&radius=${radius}`,
      );
      return response.data;
    },
  });

  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (isFetching) {
      setCountdown(120);
    }
    if (countdown > 0 && !isFetching) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, isFetching]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleRadiusChange = (change: number) => {
    const newRadius = Math.max(5, radius + change);
    setRadius(newRadius);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="p-4 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4 w-full ">
          <h2 className="text-lg font-semibold ">Available Providers</h2>
          {isFetching ? <p>Loading providers...</p> : null}
          <button
            disabled={isFetching}
            className="bg-primary disabled:bg-gray-300 p-2 text-white cursor-pointer rounded-md text-sm ml-auto"
            onClick={() => {
              refetch();
            }}
          >
            Reload
          </button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <p>Radius: {radius} miles</p>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => handleRadiusChange(-10)}
            disabled={isFetching || radius <= 5}
          >
            -10
          </button>
          <button
            disabled={isFetching}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => handleRadiusChange(10)}
          >
            +10
          </button>
        </div>
        {countdown > 0 && !isFetching && (
          <p>Refreshing in: {formatTime(countdown)}</p>
        )}
        {data?.data?.vendors?.length === 0 && !isFetching && (
          <p>No providers found within the specified radius.</p>
        )}
        {isFetching && <p>Loading providers...</p>}
        <ul className="space-y-4">
          {data?.data?.vendors?.map((vendor) => (
            <li
              key={vendor.id}
              className="border p-4 rounded-md shadow-sm bg-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{vendor.profile.name}</h3>
                <button
                  className="bg-primary text-sm text-white py-2 px-4 rounded-md cursor-pointer"
                  onClick={() => {
                    console.log(vendor);
                    setVendor(vendor);
                    setIsOpen(true);
                  }}
                >
                  View on Map
                </button>
              </div>
              <p className="text-gray-600">
                Distance: {vendor.distance_in_km?.toFixed(2)} km
              </p>
              <p className="text-gray-600">
                Rating: {vendor.profile.reviewsAvg?.toFixed(1) || "N/A"}
              </p>
              <p className="text-gray-600">City: {vendor.city || "N/A"}</p>
              {/* Add more vendor details here */}
            </li>
          ))}
        </ul>
      </div>
      <Portal>
        {isOpen && (
          <ViewOnMap
            close={close}
            vendor={vendor as unknown as any}
          ></ViewOnMap>
        )}
      </Portal>
    </div>
  );
}
