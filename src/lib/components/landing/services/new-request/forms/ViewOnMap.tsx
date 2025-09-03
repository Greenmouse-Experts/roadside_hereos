import { useCallback, useState } from "react";
import { useLocation } from "../../request/ServiceSec";
import { Vendor } from "./new-provider-list";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import GoogleMapReact from "google-map-react";

interface VendorData {
  id: string;
  user_id: string;
  brands: string[];
  service_rendered: {
    id: string;
    fee: number;
  }[];
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
  location: {
    type: string;
    coordinates: [number, number];
  };
  location_last_updated: string;
  createdAt: string;
  updatedAt: string;
  distance_in_km: number;
  profile: {
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
  };
}
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
export default function ViewOnMap({
  vendor,
  close,
}: {
  vendor?: VendorData;
  close: () => void;
}) {
  const [location] = useLocation();
  const lat = parseFloat(location?.latitude);
  const lng = parseFloat(location?.longitude);
  const new_center = {
    lat: lat,
    lng: lng,
  };
  const [map, setMap] = useState(null);
  const vendor_positon = {
    lat: parseFloat(vendor?.latitude),
    lng: parseFloat(vendor?.longitude),
  };
  return (
    <div className="fixed top-0  h-screen w-screen  bg-black/50 backdrop-blur-sm z-20 grid place-items-center">
      <div className="flex w-full max-w-xl flex-col bg-white rounded">
        <button
          onClick={close}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
        {/*{JSON.stringify(vendor_positon)}*/}
        <div className="w-full flex-1   flex bg-white p-4 max-w-xl rounded-md min-h-[520px]">
          <div className="flex-1">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_KEY}>
              <Map
                defaultCenter={new_center}
                defaultZoom={15}
                mapId="DEMO_MAP_ID"
              >
                <AdvancedMarker position={new_center} />
                <AdvancedMarker position={vendor_positon} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
