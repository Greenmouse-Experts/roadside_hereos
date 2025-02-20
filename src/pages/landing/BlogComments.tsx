import { useState } from "react";
import { ScaleSpinner } from "../../lib/components/ui/Loading";
import Button from "../../lib/components/ui/Button";
import { createBlogComments, getBlogComments } from "../../lib/services/api/blogApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TextInput, { InputType } from "../../lib/components/ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import dayjs from "dayjs";


export default function BlogComments({id}: any) {
    const [isBusy, setIsBusy] = useState(false);
    const queryClient = useQueryClient();

    const { data: blogComments } = useQuery({
        queryKey: ["getBlogComments", id],
        queryFn: () => getBlogComments(`${id}`),
    });


    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            content: "",
        },
    });

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0]?.toUpperCase())
            .join("");
    };


    const mutation = useMutation({
        mutationFn: createBlogComments,
        onSuccess: (response) => {
            setIsBusy(false);
            toast.success(response.message);
            reset();
            queryClient.invalidateQueries({ queryKey: ["getBlogComments", id] });
        },
        onError: (error: any) => {
            toast.error(error.response.data.message);
            setIsBusy(false);
        },
    });


    const onSubmit = (data: any) => {
        setIsBusy(true);
        const payload = {
            content: data.content,
            blogPostId: id,
        };
        mutation.mutate(payload);
    };

    return (
        <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            <div className="space-y-4 mb-4">
                {blogComments?.data.map((comment: any) => (
                    <div key={comment.id} className="p-3 border rounded shadow-sm flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-700 font-bold rounded-full mr-3">
                            {getInitials(`${comment.commentor.fname} ${comment.commentor.lname}`)}
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">{comment.commentor.fname} {comment.commentor.lname}</p>
                            <p className="text-gray-600">{comment.content}</p>
                            <p className="text-xs text-gray-400">{dayjs(comment.createdAt).format("MMMM D, YYYY [at] h:mm A")}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Controller
                            name="content"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter a comment",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    label=""
                                    labelClassName="text-[#000000B2] fw-500"
                                    placeholder="Write a comment..."
                                    error={errors.content?.message}
                                    type={InputType.textarea}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />
                        <div className="mt-8">
                            <Button
                                title={isBusy ? <ScaleSpinner size={14} color="white" /> : "Add Comment"}
                                disabled={!isValid}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
