import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ImageInput from "../../../ui/ImageInput";
import TextInput, { InputType } from "../../../ui/TextInput";

const GeneralInfo = () => {
//   const [isBusy, setIsBusy] = useState(false);
  const [imageValue, setImageValue] = useState<Array<File>>();
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      photo: "",
      address: "",
      company: "",
      tin: "",
      coe: "",
      ssn: ""
    },
  });
  
  return (
    <>
      <div className="bg-gray-100 p-4 pb-8 rounded-md">
        <form>
          <div className="grid gap-3">
          <Controller
              name="company"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category company",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Company Name (optional)"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.company?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category address",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Operational Address"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.address?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
            <Controller
              name="tin"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category tin",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Tax Identification Number"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.tin?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="ssn"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Social Security Number SSN"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.ssn?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            </div>
          </div>
          <div>
            <ImageInput
              label="Passport Photograph"
              setImage={setImageValue}
              containerClass="mt-5"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneralInfo;
