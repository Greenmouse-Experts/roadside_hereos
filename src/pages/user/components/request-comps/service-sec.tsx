import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import GetCurrentLocation from "../../../../lib/components/landing/services/request/Extra/GetCurrentLocation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../../lib/services/api/serviceApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { atomWithStorage } from "jotai/utils";
import { atom, useAtom } from "jotai";
import { useCurrentId } from "../../new-request";
interface ServResponse {
  message: string;
  data: FormProps;
}
const serv_atom = atomWithStorage<ServResponse | null>("serv_response", null);
const useServResp = () => {
  const [serv, setServ] = useAtom(serv_atom);
  return [serv, setServ] as const;
};
interface FormProps {
  vehicleType: string;
  vehicleMake: string;
  model: string;
  vehicleYear: string;
  color: string;
  location: string;
  zipcode: string;
  city: string;
  state: string;
  longitude: number;
  latitude: number;
  requestNote: string;
  serviceId: string;
}
const getYears = Array.from(
  { length: 20 },
  (_, i) => new Date().getFullYear() - i,
);
interface ServiceInfoResponse {
  success: boolean;
  message: string;
  data: {
    serviceRequest: {
      id: string;
      status: string;
      queryNote: string | null;
      vehicleType: string;
      vehicleMake: string;
      model: string;
      vehicleYear: string;
      color: string;
      location: string;
      zipcode: string;
      city: string;
      state: string;
      longitude: number;
      latitude: number;
      requestNote: string;
      serviceId: string;
      userType: string;
      updatedAt: string;
      createdAt: string;
    };
    totalTechniciansFound: number;
  };
}
const service_sec_atom = atomWithStorage<ServiceInfoResponse | null>(
  "service_sec",
  null,
);
export const useServiceSec = () => {
  const [service, setService] = useAtom(service_sec_atom);
  return [service, setService] as const;
};

interface VehicleMake {
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface GetMotorsResponse {
  success: boolean;
  data: VehicleMake[];
}
export default function ServiceSection() {
  const { id } = useParams();
  const [service, setService] = useServiceSec();
  const [currentId, setCurrentId] = useCurrentId();
  const [servResp, setServResp] = useServResp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
    setValue,
  } = useForm<FormProps>({
    defaultValues: {
      serviceId: id,
      vehicleType: "",
      vehicleMake: "",
      model: "",
      vehicleYear: "",
      color: "",
      location: "",
      zipcode: "",
      city: "",
      state: "",
      longitude: 0,
      latitude: 0,
      requestNote: "",
    },
  });
  const service_mutation = useMutation({
    mutationFn: async (data: FormProps) => {
      let resp = await apiClient.post(
        `/service-request/service-information/create/nearby-technicians?latitude=${data.latitude}&longitude=${data.longitude}&radius=40&limit=10`,
        data,
      );
      setService(resp.data);
      return resp.data;
    },
    onSuccess: (data) => {
      toast.success("Service request created successfully");
      setCurrentId(id);
    },
    onError: (error) => {
      toast.error("Failed to create service request");
    },
  });
  const onSubmit = (data: any) => {
    toast.promise(service_mutation.mutateAsync(data), {
      pending: "Creating service request...",
    });
  };
  useEffect(() => {
    Object.entries(errors).forEach(([key, value]) => {
      toast.error(key + ": " + value.message);
    });
  }, [errors]);
  const location = watch("location");
  const zipcode = watch("zipcode");
  const vehicleType = watch("vehicleType");
  const get_motors = useQuery<GetMotorsResponse>({
    queryKey: ["vehicle-type", vehicleType],
    queryFn: async () => {
      let resp = await apiClient.get(
        vehicleType == "car" ? "/vehicle/carmakes" : `/vehicle/motorcyclemakes`,
        {
          params: {
            page: 1,
            limit: 1000,
          },
        },
      );
      return resp.data;
    },
  });

  const car_data = get_motors.data?.data;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 pb-12"
    >
      <div className="mb-2 col-span-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
          Vehicle Type
        </label>
        <select
          {...register("vehicleType")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        >
          <option value={""}>Select Vehicle Type</option>
          <option value={"car"}>Car</option>
          <option value={"motorcycle"}>Motorcycle</option>
        </select>
      </div>
      <div className="mb-2 col-span-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
          Vehicle Make{" "}
          {get_motors.isFetching && <span className="ml-2">loading...</span>}
        </label>
        {/*
        <input
          {...register("vehicleMake")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        />*/}
        <Controller
          name="vehicleMake"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter a value",
            },
          }}
          render={({ field }) => (
            <select
              className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
              {...field}
              ref={null}
            >
              <option value="">Select an option</option>
              {car_data?.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div className="mb-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">Model</label>
        <input
          {...register("model")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        />
      </div>
      <div className="mb-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
          Vehicle Year
        </label>
        {/*<input
          {...register("vehicleYear")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        />*/}
        <Controller
          name="vehicleYear"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please select an option",
            },
          }}
          render={({ field }) => (
            <select
              className="border border-gray-400 w-full mt-[4px] p-[9px]  rounded"
              {...field}
              ref={null}
            >
              <option value="">Select an option</option>
              {getYears.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        />
      </div>

      <div className="mb-2 col-span-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">Color</label>
        <input
          {...register("color")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        />
      </div>
      <div className="col-span-2 ">
        <label className="mb-2 block mt-2 fw-600 text-[#000000B2]">
          Location
        </label>
        <div className="p-2 h-[44px] rounded-md  bg-white border border-gray-400 mb-2 text-gray-700">
          {location}
        </div>
        <GetCurrentLocation
          setValue={(e) => {
            // console.log("dlos");
            // console.log("zipcode", e.postal);
            //@ts-ignore
            setValue("zipcode", e.postal);
            Object.entries(e).forEach(([key, value]) => {
              setValue(key as any, value as any);
            });
          }}
        />
      </div>
      {/*<div className="col-span-2 ">
        <label className="mb-2 block mt-2 fw-600 text-[#000000B2]">
          Zip Code
        </label>
        <input
          {...register("zipcode")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
        />
      </div>*/}
      <div className="mb-2 col-span-2 mt-2">
        <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
          Request Note (required)
        </label>
        <textarea
          {...register("requestNote")}
          className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
          rows={4}
        />
      </div>
      <div className="col-span-2 text-right">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded mt-4"
        >
          {service_mutation.isPending ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
