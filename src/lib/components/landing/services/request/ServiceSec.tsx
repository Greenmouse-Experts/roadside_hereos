import { FC, useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../ui/TextInput";
import { Button } from "@material-tailwind/react";
import { carsList } from "../../../../services/hardData/cars";
import GetCurrentLocation from "./Extra/GetCurrentLocation";

interface Props {
  next: () => void;
  prev?: () => void;
}
const ServiceSec: FC<Props> = ({ next }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    reset({
      ...getValues,
      location: location
    })
  },[location])
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      car_make: "",
      car_model: "",
      car_year: "",
      car_color: "",
      location: "",
      other: "",
    },
  });
  const getYears = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
  const handleForm = () => {
    next();
  };
  return (
    <>
      <div className="bg-gray-100 lg:p-10 lg:pb-20 p-4 pb-8 rounded-md">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="grid gap-3">
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
                  Car Make
                </label>
                <Controller
                  name="car_make"
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
                      {carsList.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.car_make && (
                  <p className="error text-red-400 mt-1 fw-600 text-sm">
                    Please select an option
                  </p>
                )}
              </div>
              <Controller
                name="car_model"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a value",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Model"
                    labelClassName="text-[#000000B2] fw-600"
                    error={errors.car_model?.message}
                    type={InputType.text}
                    {...field}
                    ref={null}
                  />
                )}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label className="mb-1 block mt-2 fw-600 text-[#000000B2]">
                Year
                </label>
                <Controller
                  name="car_year"
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
                {errors.car_year && (
                  <p className="error text-red-400 fw-600 mt-1 text-sm">
                    Please select an option
                  </p>
                )}
              </div>
              <Controller
                name="car_color"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a value",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Color"
                    labelClassName="text-[#000000B2] fw-600"
                    error={errors.car_color?.message}
                    type={InputType.text}
                    {...field}
                    ref={null}
                  />
                )}
              />
            </div>
            <div>
            <Controller
                name="location"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a value",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Current Location"
                    labelClassName="text-[#000000B2] fw-600"
                    error={errors.other?.message}
                    type={InputType.textarea}
                    {...field}
                    ref={null}
                  />
                )}
              />
              <div className="mt-3">
                <GetCurrentLocation setValue={setLocation}/>
              </div>
            </div>
            <div>
              <Controller
                name="other"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a value",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Service Details"
                    labelClassName="text-[#000000B2] fw-600"
                    error={errors.other?.message}
                    type={InputType.textarea}
                    {...field}
                    ref={null}
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <Button
              type={"submit"}
              className="btn-feel flex gap-x-2 items-center"
            >
              Next <FaArrowRightLong />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceSec;
