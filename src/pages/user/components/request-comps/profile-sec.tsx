import { useMutation } from "@tanstack/react-query";
import { atomWithStorage } from "jotai/utils";
import { useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";
import { apiClient } from "../../../../lib/services/api/serviceApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { useServiceSec } from "./service-sec";
import useAuth from "../../../../lib/hooks/authUser";
const profile_sec_atom = atomWithStorage<any>("profile_sec", null);
export const useProfileSec = () => {
  let [prof, setProf] = useAtom(profile_sec_atom);
  return [prof, setProf] as const;
};
export interface SectionProps {
  next: () => void;
}
export default function ProfileSection(props: SectionProps) {
  const { id } = useParams();
  const [profile, setProfile] = useProfileSec();
  const { user } = useAuth();
  const [service, setService] = useServiceSec();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: user.name,
      lastname: user.name,
      email: user.email,
      phone: user.phone,
      address: "",
    },
  });
  const onSubmit = (data: any) => {
    toast.promise(create_mutation.mutateAsync(data), {
      pending: "Creating profile...",
      success: "Profile created successfully!",
      error: "Failed to create profile",
    });
  };
  const create_mutation = useMutation({
    mutationFn: async (data: any) => {
      let resp = await apiClient.post(
        "/service-request/profile-information/create",
        {
          ...data,
          request_id: service.data.serviceRequest.id,
        },
      );
      setProfile(resp.data);
      return resp.data;
    },
    onSuccess: () => {
      props.next();
    },
  });
  // return <>{JSON.stringify(user)}</>;
  return (
    <div className="w-full mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="mb-2 col-span-2">
          <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
            First Name
          </label>
          <input
            {...register("first_name", { required: "First name is required" })}
            className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
          />
          {errors.first_name && (
            <p className="error text-red-400 text-sm">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div className="mb-2 col-span-2">
          <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
            Last Name
          </label>
          <input
            {...register("last_name", { required: "Last name is required" })}
            className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
          />
          {errors.last_name && (
            <p className="error text-red-400 text-sm">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div className="mb-2 col-span-2">
          <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
            Phone
          </label>
          <PhoneInputWithCountrySelect
            defaultCountry="US"
            countries={["US"]}
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value:
                  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                message: "Please Enter A Valid Number",
              },
            }}
            className="border p-2 bg-white border-gray-400 rounded outline-none"
          />
          {errors.phone && (
            <p className="error text-red-400 text-sm">
              {errors.phone.message || "Invalid Phone Number"}
            </p>
          )}
        </div>

        <div className="mb-2 col-span-2">
          <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
            email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
          />
          {errors.email && (
            <p className="error text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-2 col-span-2">
          <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
            Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            className="border border-gray-400 w-full mt-[4px] p-[9px] rounded"
          />
          {errors.address && (
            <p className="error text-red-400 text-sm">
              {errors?.address?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
