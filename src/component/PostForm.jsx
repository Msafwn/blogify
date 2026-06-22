import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button,Input, Rte,SelectInput  } from './index'
import service from "../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const [imageError, setImageError] = useState(false);
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await service.uploadfile(data.image[0]) : null;

            if (file) {
                service.deletefile(post.featuredImage);
            }

            const dbPost = await service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await service.uploadfile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await service.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-6">
            <div className="w-full lg:w-2/3">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <h2 className='text-xl font-bold text-slate-100 mb-6'>Post Details</h2>
                    <Input
                        label="Post Title"
                        placeholder="Enter post title"
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Post Slug"
                        placeholder="Auto-generated slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <div className='mb-4'>
                        <label className='inline-block pb-2 pl-1 text-slate-300 font-medium text-sm'>Content</label>
                        <Rte name="content" control={control} defaultValue={getValues("content")}/>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <h2 className='text-xl font-bold text-slate-100 mb-6'>Post Settings</h2>
                    <Input
                        label="Featured Image"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-6">
                            {imageError || !post.featuredImage ? (
                                <div className='w-full h-40 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700/50'>
                                    <span>Image not available</span>
                                </div>
                            ) : (
                                <img
                                    src={service.getFileDownload(post.featuredImage)}
                                    alt={post.title}
                                    className="rounded-lg w-full h-40 object-cover border border-slate-700/50"
                                    onError={() => setImageError(true)}
                                />
                            )}
                        </div>
                    )}
                    <SelectInput
                        options={["active", "inactive"]}
                        label="Status"
                        placeholder="Select status"
                        className="mb-6"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" variant={post ? 'secondary' : 'primary'} childern={post ? "Update Post" : "Publish Post"} className="w-full" >
                    </Button>
                </div>
            </div>
        </form>
    );
}