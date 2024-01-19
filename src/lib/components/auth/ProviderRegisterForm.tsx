import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../ui/TextInput";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { LuUserCircle } from "react-icons/lu";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../ui/Button";
import { ScaleSpinner } from "../ui/Loading";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/api/serviceApi";
import { ServiceCatItem } from "../../types/service";
import { registerProvider } from "../../services/api/authApi";
import { toast } from "react-toastify";
import useModal from "../../hooks/useModal";
import RegisterSuccess from "./RegisterSuccess";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



const ProviderRegisterForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const { Modal, setShowModal } = useModal();
  const [showDrop, setShowDrop] = useState(false);
  // const [selectedCat, setSelectedCat] = useState([]);
  const [values, setValues] = useState<string[]>([]);
  const { data: services } = useQuery({
    queryKey: ["getCat"],
    queryFn: getCategories,
  });
  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      const newValue = event.target.value; // Replace this with the value you want to add
      setValues((prevValues) => [...prevValues, newValue]);
    } else {
      values.splice(values.indexOf(event.target.value), 1);
    }
    // const selected = services?.data.filter((where:ServiceCatItem) => values.includes(where.id))
    // setSelectedCat(selected)
  };
  
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
      serviceTypeId: [],
    },
  });
  const mutation = useMutation({
    mutationFn: registerProvider,
  });
  const onSubmit = (data: any) => {
    setIsBusy(true);
    const payload = {
      name: `${data.first_name}`,
      email: data.email,
      phone: data.phone,
      password: data.password,
      userType: "professional",
      serviceTypeId: values,
      captcha: captchaRef.current.getValue(),
    };
    mutation.mutate(payload, {
      onSuccess: (data) => {
        setIsBusy(false);
        toast.success(data?.message);
        setShowModal(true)
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
        setIsBusy(false);
      },
    });
  };
  const captchaRef = useRef<any>(null);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if (!ref?.current?.contains(e.target)) {
        setShowDrop(false)
      }
    };

    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, [close]);
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
                label="Company Name"
                labelClassName="text-[#000000B2] fw-500"
                icon={
                  <LuUserCircle className="text-2xl mx-2 lg:mx-3 text-gray-800" />
                }
                error={errors.first_name?.message}
                type={InputType.text}
                {...field}
                ref={null}
              />
            )}
          />
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
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <div className="mt-[4px]">
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
          <div className="mt-4" ref={ref}>
            <label className="fw-500 text-[#000000B2]">Service Category</label>
            <div className="border border-gray-400 w-full mt-[4px] px-[9px] py-[9px] rounded flex items-center gap-x-2">
              <MdOutlineHomeRepairService className="text-2xl text-gray-700" />
              <div className="w-full relative">
                <div className="rounded flex items-center justify-between" onClick={() => setShowDrop(!showDrop)}>
                  <div className="w-[90%] flex items-center gapx-2 overflow-x-auto scroll-pro whitespace-nowrap">
                    {/* {selectedCat.map((item: selectedCatType) => (
                      <span className="px-1 rounded">{item.name},</span>
                    ))} */}
                    <p>Select Services</p>
                  </div>
                  <div onClick={(e) => e.preventDefault()}>
                    {showDrop ? (
                      <FaChevronUp
                        className="text-[13px]"
                        onClick={() => setShowDrop(false)}
                      />
                    ) : (
                      <FaChevronDown
                        className="text-[13px]"
                        onClick={() => setShowDrop(true)}
                      />
                    )}
                  </div>
                </div>
                {showDrop && (
                  <div className="absolute grid gap-2 z-10 top-8 left-0 bg-white w-full p-3 border shadow">
                    {services?.data &&
                      services?.data.map((item: ServiceCatItem) => (
                        <div className="flex items-center gap-x-2">
                          <input
                            type="checkbox"
                            value={item.id}
                            checked={values.includes(String(item.id))}
                            className=""
                            onChange={handleCheckboxChange}
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
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
                message: "Please enter your password",
              },
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Confirm Password"
                labelClassName="text-[#000000B2] fw-500"
                icon={<VscLock className="text-2xl mx-2 lg:mx-4" />}
                placeholder="*********"
                error={errors.confirm_password?.message}
                type={InputType.password}
                {...field}
                ref={null}
              />
            )}
          />
        </div>
        <div className="mt-8">
            <ReCAPTCHA
              sitekey={`6Leno1MpAAAAAO0BmPjneoVUVd5FKfw0ED40qvpc`}
              ref={captchaRef}
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
      <Modal title="" size="sm">
        <div>
          <RegisterSuccess />
        </div>
      </Modal>
    </div>
  );
};

export default ProviderRegisterForm;
