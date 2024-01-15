import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../ui/TextInput";

const BankInfo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bank_name: "",
      bank_currency: "",
      account_name: "",
      account_number: "",
      account_type: "",
    },
  });
  const onSubmit = () => {};
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-4">
            <Controller
              name="bank_name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Bank Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="bank_currency"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Bank Currency"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="account_name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Account Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="account_number"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Account Number"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="account_type"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Account Type"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="bank_name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter an input",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Bank Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.bank_name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BankInfo;
