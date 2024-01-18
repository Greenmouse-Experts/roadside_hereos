import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../ui/TextInput";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { Button } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FC } from "react";

interface Props {
    next: () => void
    prev: () => void
}
const PersonalSec:FC<Props> = ({next, prev}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
    },
  });
  const handleForm = () => {
    next()
  }
  return (
    <>
      <div className="bg-gray-100 lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="grid gap-3">
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
            <Controller
              name="first_name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="First Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.first_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Last Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.last_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter an email",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Email Address"
                    labelClassName="text-[#000000B2] fw-500"
                    error={errors.email?.message}
                    type={InputType.email}
                    {...field}
                    ref={null}
                  />
                )}
              />
              <div>
                <label className="mb-1 block mt-3 fw-500 text-[#000000B2]">
                  Phone Number
                </label>
                <PhoneInputWithCountry
                  international
                  defaultCountry="NG"
                  name="phone"
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
                {errors.phone && (
                  <p className="error text-red-400 text-sm">
                    Invalid Phone Number
                  </p>
                )}
              </div>
            </div>
            <div>
              <Controller
                name="address"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a value",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Residence Address"
                    labelClassName="text-[#000000B2] fw-500"
                    error={errors.address?.message}
                    type={InputType.textarea}
                    {...field}
                    ref={null}
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-16 flex justify-between">
           <Button
              onClick={prev}
              className="btn-feel flex gap-x-2 items-center"
            >
              <FaArrowLeftLong /> Prev
            </Button>
            <Button type={'submit'} className="btn-feel flex gap-x-2 items-center">
                Next <FaArrowRightLong/>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalSec;
