import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";
import { FC } from "react";

interface Props{
    close: () => void
}
const InviteStaff:FC<Props> = ({close}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const submitAction = () => {
    close()
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submitAction)}>
          <div className="grid gap-4">
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Full Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.firstName?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="lastName"
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
                  error={errors.lastName?.message}
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
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Email"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.email?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between">
              <div className="w-full">
                <Button title={"Invite"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InviteStaff;
