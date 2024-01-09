import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextInput, { InputType } from '../ui/TextInput';
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from 'react-icons/vsc'
import Button from '../ui/Button';
import { ScaleSpinner } from '../ui/Loading';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [isBusy, setIsBusy] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: "onChange",
        defaultValues: {
          email: "",
          password: "",
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
      <div className="mt-6 relative">
        <Link to="/auth/forget" className='absolute top-0 right-0 fw-500 fs-400'>Forgot Password?</Link>
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
              icon={<VscLock className="text-2xl mx-2 lg:mx-4"/>}
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
        <Button title={isBusy ? <ScaleSpinner size={14} color="white"/> : "Login"} disabled={!isValid} />
      </div>
    </form>
  </div>
);
}

export default LoginForm