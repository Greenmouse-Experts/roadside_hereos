import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../ui/TextInput";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { LuUserCircle } from "react-icons/lu";
import { GoCrossReference } from "react-icons/go";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Button from "../ui/Button";
import { ScaleSpinner } from "../ui/Loading";

const ProviderRegisterForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
      service: "",
      referral: ''
    },
  });
  const onSubmit = () => {
    setIsBusy(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-4">
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your first_name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="First Name"
                labelClassName="text-[#000000B2] fw-500"
                icon={
                  <LuUserCircle className="text-2xl mx-2 lg:mx-3 text-gray-800" />
                }
                error={errors.email?.message}
                type={InputType.email}
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
                message: "Please enter your last_name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Last Name"
                labelClassName="text-[#000000B2] fw-500"
                icon={
                  <LuUserCircle className="text-2xl mx-2 lg:mx-3 text-gray-800" />
                }
                error={errors.email?.message}
                type={InputType.email}
                {...field}
                ref={null}
              />
            )}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Email"
                labelClassName="text-[#000000B2] fw-500"
                icon={<AiOutlineMail className="text-2xl mx-2 lg:mx-4" />}
                error={errors.email?.message}
                type={InputType.email}
                {...field}
                ref={null}
              />
            )}
          />
          <div>
            <label className="mb-1 block mt-3">Phone Number</label>
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
              className="border p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone && (
              <p className="error text-red-400 text-sm">Invalid Phone Number</p>
            )}
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="fw-500">Service Category</label>
            <Controller
              name="service"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select a service",
                },
              }}
              render={({ field }) => (
                <select
                  className="border border-gray-400 w-full mt-[4px] p-2 rounded "
                  {...field}
                  ref={null}
                >
                  <option>Mechanic</option>
                  <option>Baterry Charger</option>
                </select>
              )}
            />
          </div>
          <Controller
            name="referral"
            control={control}
            rules={{
              required: false
            }}
            render={({ field }) => (
              <TextInput
                label="Referral"
                labelClassName="text-[#000000B2] fw-500"
                icon={<GoCrossReference className="text-2xl mx-2 lg:mx-4" />}
                error={errors.email?.message}
                type={InputType.email}
                {...field}
                ref={null}
              />
            )}
          />
        </div>
        <div className=" grid lg:grid-cols-2 gap-4">
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Password"
                labelClassName="text-[#000000B2] fw-500"
                icon={<VscLock className="text-2xl mx-2 lg:mx-4" />}
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
                ref={null}
              />
            )}
          />
          <Controller
            name="confirm_password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Confirm Password"
                labelClassName="text-[#000000B2] fw-500"
                icon={<VscLock className="text-2xl mx-2 lg:mx-4" />}
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
                ref={null}
              />
            )}
          />
        </div>

        <div className="mt-12">
          <Button
            title={
              isBusy ? <ScaleSpinner size={14} color="white" /> : "Register"
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ProviderRegisterForm;
