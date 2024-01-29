import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import TextInput, { InputType } from "../../../ui/TextInput";
import useAuth from "../../../../hooks/authUser";
import Button from "../../../ui/Button";
import useKycStore from "../../../../store/kycStore";

interface Props {
  next: () => void;
}
const GeneralInfo: FC<Props> = ({ next }) => {
  const { user } = useAuth();
  const kyc = useKycStore((state) => state.kyc);
  const saveKyc =  useKycStore((state) => state.saveKyc);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      address: kyc.address || "",
      company: user.name,
      business_registration_number: kyc.registration_number || "",
      tin: kyc.tax_id || "",
      date: kyc.incorporation_date || "",
      business_type: kyc.business_nature || "",
      business_email: kyc.business_email || user?.email || "",
      business_phone: kyc.business_phone || user?.phone || "",
    },
  });
  const submitAction = async(data: any) => {
    const payload = {
      business_name: user.name,
      registration_number: data.business_registration_number,
      incorporation_date: data?.date,
      address: data.address,
      business_email: data.business_email,
      business_phone: data.business_phone,
      business_nature: data.business_type,
      staff_number: 2,
      vat_registration_number: data.business_registration_number,
      tax_id: data.tin ,
    };
    await saveKyc({...kyc, ...payload})
    next()
  };

  return (
    <>
      <div className="bg-gray-100 p-4 pb-8 rounded-md">
        <form onSubmit={handleSubmit(submitAction)}>
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
              disabled
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
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
              <Controller
                name="business_registration_number"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter category tin",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Business Reg No"
                    labelClassName="text-[#000000B2] fw-500"
                    error={errors.business_registration_number?.message}
                    type={InputType.text}
                    {...field}
                    ref={null}
                  />
                )}
              />
              <div>
                <label className="block mt-3 text-[#000000B2] fw-500">
                  Date of Incorporation/Registration
                </label>
                <Controller
                  name="date"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter a value",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type="month"
                      min="2000-03"
                      className="border border-gray-400 rounded-[4px] py-2 px-3 mt-[2px] w-full"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
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
                  type={InputType.textarea}
                  {...field}
                  ref={null}
                />
              )}
            />
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label className="block mt-3 text-[#000000B2] fw-500">
                  Nature of Company
                </label>
                <Controller
                  name="business_type"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter a value",
                    },
                  }}
                  render={({ field }) => (
                    <select
                      className="border w-full border-gray-400 rounded-[4px] py-2 px-3 mt-2"
                      {...field}
                    >
                      <option value="">Please select an option</option>
                      <option value="Corporation (federal or provincial/territorial)">
                        Corporation (federal or provincial/territorial)
                      </option>
                      <option value="Sole proprietorship or partnership">
                        Sole proprietorship or partnership
                      </option>
                      <option value="Cooperative">Cooperative</option>
                    </select>
                  )}
                />
              </div>
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
            </div>
            <div>
              <p className="fw-500 mt-3">Comapany Contact Information</p>
              <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
                <Controller
                  name="business_email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter a value",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Email"
                      labelClassName="text-[#000000B2] fw-500"
                      error={errors.business_email?.message}
                      type={InputType.text}
                      {...field}
                      ref={null}
                    />
                  )}
                />
                <div className="">
                  <label className="mb-1 block mt-[10px] fw-500 text-[#000000B2]">
                    Phone Number
                  </label>
                  <PhoneInputWithCountry
                    international
                    defaultCountry="NG"
                    name="business_phone"
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value:
                          /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                        message: "Please Enter A Valid Number",
                      },
                    }}
                    className="border p-2 bg-white border-gray-400 rounded outline-none"
                  />
                  {errors.business_phone && (
                    <p className="error text-red-400 text-sm">
                      Invalid Phone Number
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-end">
              <div className="w-3/12">
                <Button title={"Next"} disabled={!isValid}/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneralInfo;
