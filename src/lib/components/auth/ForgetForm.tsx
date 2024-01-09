import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextInput, { InputType } from '../ui/TextInput';
import { AiOutlineMail } from "react-icons/ai";
import Button from '../ui/Button';
import { ScaleSpinner } from '../ui/Loading';

const ForgetForm = () => {
    const [isBusy, setIsBusy] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: "onChange",
        defaultValues: {
          email: "",
        },
      });
    const onSubmit = () => {
        setIsBusy(true)
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
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
              icon={<AiOutlineMail className="text-2xl mx-2 lg:mx-4"/>}
              placeholder="victorchigozie@gmail.com"
              error={errors.email?.message}
              type={InputType.email}
              {...field}
              ref={null}
            />
          )}
        />
      </div>
      <div className="mt-12">
        <Button title={isBusy ? <ScaleSpinner size={14} color="white"/> : "Continue"} disabled={!isValid} />
      </div>
    </form>
  </div>
);
}

export default ForgetForm