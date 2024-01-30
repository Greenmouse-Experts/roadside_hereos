import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
// import TextInput, { InputType } from "../ui/TextInput";
import { Link, useParams } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
import TextInput, { InputType } from "../../lib/components/ui/TextInput";
import Button from "../../lib/components/ui/Button";
import { ScaleSpinner } from "../../lib/components/ui/Loading";
import OnboardSuccess from "../../lib/components/auth/OnboardSuccess";
import useModal from "../../lib/hooks/useModal";
import axios from "axios";
import { toast } from "react-toastify";

const OnboardStaff = () => {
    const { code } = useParams();
    const token =   code?.replace("token=", "")
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      address: "",
      password: "",
      confirm_password: "",
    },
  });
  const {Modal, setShowModal} = useModal()
  const submitAction = async(data:any) => {
    setIsBusy(true)
    const payload = {
        address: data.address,
        password: data.password,
        phone_number: data.phone
    }
    await axios.post('/invitation-request/join', payload, {
        headers: {
            Authorization: token
        }
    })
    .then((data:any) => {
        toast.success(data.message)
        setIsBusy(false)
        setShowModal(true)
    })
    .then((err:any) => {
        toast.error(err.response.data.message)
        setIsBusy(false)
    })
  }
  return (
    <>
      <div className="bg-primary h-screen">
        <div className="w-full h-full bg-login">
          <div className="box h-full place-center">
            <div className="lg:w-[550px] mx-auto bg-white lg:px-16 p-6">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706192916/rsh/Group_48097863_txmkbr.png"
                  alt="logo"
                  className="w-60 mx-auto my-6"
                  width={400}
                  height={80}
                />
              </Link>
              <div className="mt-6 lg:mt-6">
                <p className="text-xl fw-600">Hello Marline</p>
                <p className="mt-3 fs-500">
                  Please complete your registration to gain access
                </p>
              </div>
              <div className="my-8 lg:mt-8 mb-5 mx-auto">
                <form onSubmit={handleSubmit(submitAction)}>
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
                      <p className="error text-red-400 text-sm">
                        Invalid Phone Number
                      </p>
                    )}
                  </div>
                  <div>
                    <Controller
                      name="address"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "Please enter your address",
                        },
                      }}
                      render={({ field }) => (
                        <TextInput
                          label="Address"
                          labelClassName="text-[#000000B2] fw-500"
                          error={errors.address?.message}
                          type={InputType.textarea}
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
                  <div className="mt-12">
                    <Button
                      title={
                        isBusy ? (
                          <ScaleSpinner size={14} color="white" />
                        ) : (
                          "Register"
                        )
                      }
                      disabled={!isValid}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="" size="sm">
        <div>
          <OnboardSuccess />
        </div>
      </Modal>
    </>
  );
};

export default OnboardStaff;
