import { FC, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import { City, ICity, IState, State } from "country-state-city";
import TextInput, { InputType } from "../../../ui/TextInput";
import { Button } from "@material-tailwind/react";
import { carsList } from "../../../../services/hardData/cars";
import GetCurrentLocation from "./Extra/GetCurrentLocation";
import { requestService } from "../../../../services/api/serviceApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import useRequestStore from "../../../../store/serviceStore";
import { requestForTokenForService } from "../../../../firebase/firebase";

export interface LocationProps {
  city: string;
  location: string;
  latitude: string;
  longitude: string;
  postal: string;
  state: string;
}
interface Props {
  next: () => void;
  prev?: () => void;
  activeId: string;
  activeQuestion: string;
}
const ServiceSec: FC<Props> = ({ next, activeId, activeQuestion }) => {
  const [states, setStates] = useState<IState[]>(State.getStatesOfCountry('US'));
  const [cities, setCities] = useState<ICity[]>([]);
  const saveServiceId = useRequestStore((state) => state.saveRequest);
  const [fcmToken, setFcmToken] = useState("");
  const [locationType, setLocationType] = useState("auto");
  const [locationDetail, setLocationDetail] = useState<LocationProps>({
    city: "",
    location: "",
    latitude: "",
    longitude: "",
    postal: "",
    state: ""
  });

  console.log(locationDetail)

  const locationList = ["autofill", "manual"];

  const [isBusy, setIsBusy] = useState(false);

  const getToken = () => {
    requestForTokenForService().then((res) => setFcmToken(res as string));
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    reset({
      ...getValues(),
      location: locationDetail.location,
    });
  }, [locationDetail]);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      car_make: "",
      car_model: "",
      car_year: "",
      car_color: "",
      location: "",
      zipcode: "",
      city: "",
      country: "US",
      state: "",
      other: "",
    },
  });
  const getYears = Array.from(
    { length: 20 },
    (_, i) => new Date().getFullYear() - i
  );
  const request = useMutation({
    mutationFn: requestService,
    mutationKey: ["request"],
  });
  const handleForm = (data: any) => {
    setIsBusy(true);
    const payload = {
      vehicleMake: data.car_make,
      model: data.car_model,
      vehicleYear: data.car_year,
      color: data.car_color,
      location: locationDetail.location || data.location,
      zipcode: locationDetail.postal || data.zipcode,
      city: locationDetail.city || data.city,
      state: locationDetail.state || data.state,
      longitude: locationDetail.longitude || 0,
      latitude: locationDetail.latitude || 0,
      requestNote: data.other,
      serviceId: activeId,
      userFcmToken: fcmToken,
    };
    request.mutate(payload, {
      onSuccess: (data) => {
        setIsBusy(false);
        saveServiceId({
          id: data.data.id,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: data?.data?.zipcode,
          price: 0,
          homeAddress: "",
          level: 0,
          qouteId: "",
        });
        next();
      },
      onError: (err: any) => {
        setIsBusy(false);
        toast.error(err.response.data.message);
      },
    });
  };

  const handleCountryChange = (countryCode: string) => {
    setValue("country", countryCode);
    setValue("state", "");
    setValue("city", "");
    setStates(State.getStatesOfCountry(countryCode));
    setCities([]);
  };

  const handleStateChange = (stateCode: string, countryCode: string) => {
    setValue("state", stateCode);
    setValue("city", "");
    setCities(City.getCitiesOfState(countryCode, stateCode));
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
              <div className="flex items-center gap-x-5 mt-3">
                <p className="text-[#000000B2] fw-600">Current Location</p>
                <div className="flex items-center gap-x-4 ">
                  {locationList.map((item: string) => (
                    <div
                      className="flex items-center cursor-pointer gap-x-1"
                      key={item}
                      onClick={() => setLocationType(item)}
                    >
                      <input
                        checked={locationType === item}
                        type="radio"
                        name="location"
                        id=""
                        className="w-4 h-4"
                      />
                      <label htmlFor="" className="cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {locationType === "autofill" && (
                  <>
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
                          label=""
                          labelClassName="text-[#000000B2] fw-600"
                          error={errors.other?.message}
                          type={InputType.textarea}
                          disabled
                          {...field}
                          ref={null}
                        />
                      )}
                    />
                    <div className="mt-3">
                      <GetCurrentLocation setValue={setLocationDetail} />
                    </div>
                  </>
                )}
                {locationType === "manual" && (
                  <>
                    <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <TextInput
                            label="Country"
                            type={InputType.select}
                            options={[
                              {
                                value: "US",
                                label: "United States",
                              },
                            ]}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleCountryChange(e.target.value);
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                          <TextInput
                            label="State"
                            type={InputType.select}
                            options={states.map((s) => ({
                              value: s.isoCode,
                              label: s.name,
                            }))}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleStateChange(e.target.value, watch("country"));
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <TextInput
                            label="City"
                            type={InputType.select}
                            options={cities.map((c) => ({
                              value: c.name,
                              label: c.name,
                            }))}
                            {...field}
                          />
                        )}
                      />
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
                            label="Location"
                            placeholder="Please enter your current location"
                            error={errors.other?.message}
                            type={InputType.text}
                            {...field}
                            ref={null}
                          />
                        )}
                      />

                      <Controller
                        name="zipcode"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: "Please enter a value",
                          },
                        }}
                        render={({ field }) => (
                          <TextInput
                            label="Zip Code"
                            placeholder="Zip Code"
                            error={errors.other?.message}
                            type={InputType.text}
                            {...field}
                            ref={null}
                          />
                        )}
                      />
                    </div>
                  </>
                )}
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
                    label={activeQuestion ? activeQuestion : "Service Details"}
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
              disabled={!isValid}
            >
              {isBusy ? (
                <BeatLoader size={13} />
              ) : (
                <>
                  Next <FaArrowRightLong />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceSec;
