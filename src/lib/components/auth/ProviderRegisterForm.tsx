import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../ui/TextInput";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { LuUserCircle } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { Country } from "country-state-city";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Button from "../ui/Button";
import { ScaleSpinner } from "../ui/Loading";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/api/serviceApi";
import { ServiceCatItem } from "../../types/service";

const ProviderRegisterForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const { data: services } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
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
      country: "",
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
              className="border p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone && (
              <p className="error text-red-400 text-sm">Invalid Phone Number</p>
            )}
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="fw-500 text-[#000000B2]">Service Category</label>
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
                <div className="border border-gray-400 w-full mt-[4px] p-[9px] rounded flex items-center gap-x-2">
                  <MdOutlineHomeRepairService className="text-2xl text-gray-700" />
                  <select
                    className="border-none outline-none w-full"
                    {...field}
                    ref={null}
                  >
                    <option>Select an option</option>
                    {services?.data &&
                      services?.data.map((item: ServiceCatItem) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                </div>
              )}
            />
          </div>
          <div className="mt-4">
            <label className="fw-500 text-[#000000B2]">Country</label>
          <Controller
            name="country"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field }) => (
              <div className="border border-gray-400 w-full mt-[4px] p-[9px] rounded flex items-center gap-x-2">
                <SlLocationPin className="text-xl text-gray-700" />
                <select
                  className="border-none outline-none w-full"
                  {...field}
                  ref={null}
                >
                  <option value={""}>Country of residence</option>
                  {Country.getAllCountries().map((item, index) => (
                    <option value={item.isoCode} key={index}>{item.name}</option>
                  ))}
                </select>
              </div>
            )}
          />
          </div>
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
