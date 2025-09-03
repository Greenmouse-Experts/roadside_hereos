import { useCallback, useState, useEffect } from "react";
import { useLocation } from "../../request/ServiceSec";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../../../services/api/serviceApi";
import useRequestStore from "../../../../../store/serviceStore";
import { IoReload } from "react-icons/io5";
const containerStyle = {
  width: "100%",
  height: "400px",
};
interface Vendor {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface VendorResponse {
  success: boolean;
  message: string;
  data: {
    vendors: Vendor[];
    total: number;
  };
}

export default function NewProviderList() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  });

  const [radius, setRadius] = useState(10); // Default radius in miles
  const [location] = useLocation();
  const request = useRequestStore((state) => state.request);
  let request_id = request?.id;
  const center = {
    lat: parseFloat(location?.latitude) || -34.397,
    lng: parseFloat(location?.longitude) || 150.644,
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
    enabled: isLoaded && !!location?.latitude && !!location?.longitude,
  });

  const onLoad = useCallback(() => {
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map);
  }, [center, location]);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (data?.data?.vendors?.length > 0) return;
    if (isFetching) return;
    const intervalId = setInterval(() => {
      refetch();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(180);
  }, [radius]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const increaseRadius = () => {
    setRadius((prevRadius) => prevRadius + 10);
    refetch();
  };

  const decreaseRadius = () => {
    setRadius((prevRadius) => Math.max(10, prevRadius - 10));
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 p-4 overflow-y-auto border-r">
        <div className="flex items-center mb-3 gap-3">
          <h2 className="text-lg font-semibold ">Available Providers</h2>
          {timeLeft == 0 && (
            <button
              disabled={isFetching || timeLeft > 1}
              onClick={() => {
                console.log("Refetching...");
                setTimeLeft(180);
                refetch();
              }}
              className="bg-primary p-2 rounded-md text-white"
            >
              <IoReload />
            </button>
          )}
        </div>

        <div className="flex mb-4 ">
          <div className="">
            <div className="text-xl font-bold text-blue-600">
              {formatTime(timeLeft)}
            </div>
            <div className="text-sm text-gray-500">Time remaining</div>
          </div>
          <div className="ml-auto">
            <div className="flex items-center mb-4">
              <button
                disabled={timeLeft > 1}
                onClick={decreaseRadius}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                -
              </button>
              <span className="mx-2">{radius} miles</span>
              <button
                disabled={timeLeft > 1}
                onClick={increaseRadius}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {data?.data?.vendors.length ? (
          <ul className="space-y-4">
            {data.data?.vendors.map((vendor) => (
              <li key={vendor.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">{vendor.name}</h3>
                <p>Lat: {vendor.latitude.toFixed(6)}</p>
                <p>Lng: {vendor.longitude.toFixed(6)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {data?.data?.vendors?.length > 0
              ? null
              : timeLeft > 1
                ? "Searching"
                : "No vendors found"}
          </p>
        )}
      </div>
      <div className="w-1/2">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} label="You" />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
