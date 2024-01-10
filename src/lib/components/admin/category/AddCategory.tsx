import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";
import { ScaleSpinner } from "../../ui/Loading";
import ImageInput from "../../ui/ImageInput";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../../../services/api/routineApi";
import { toast } from "react-toastify";
import { createCategory } from "../../../services/api/serviceApi";

const AddCategory = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [imageValue, setImageValue] = useState<Array<File>>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      image: "",
      pricing: "",
    },
  });
  const addCat = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success('Category Created Successfuly');
      setIsBusy(false)
      reset()
      setImageValue([])
    },
    onError: () => {
      toast.error("error dey");
      setIsBusy(false);
    },
  });
  const upload = useMutation({
    mutationFn: uploadFile,
  });
  const onSubmit = (datas: any) => {
    setIsBusy(true);
    if (imageValue) {
      const fd = new FormData();
      fd.append("image", imageValue[0]);
      upload.mutateAsync(fd, {
        onSuccess: (data) => {
          console.log(data);
          const payload = {
            name: datas.name,
            icon: data[0],
            slug: datas.pricing
          }
          addCat.mutate(payload)
        },
        onError: () => {
          toast.error("error dey");
          setIsBusy(false);
        },
      });
    }else {
      toast.info('Please add a cover photo')
      setIsBusy(false)
    }
  };
  return (
    <>
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-5">
            <Controller
              name="name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Category Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.name?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="pricing"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category pricing",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Basic Pricing"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.pricing?.message}
                  type={InputType.tel}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
          <div>
            <ImageInput
              label="Service Category Image"
              setImage={setImageValue}
              containerClass="mt-5"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <div className="lg:w-5/12">
              <Button
                title={
                  isBusy ? <ScaleSpinner size={14} color="white" /> : "Continue"
                }
                disabled={!isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
