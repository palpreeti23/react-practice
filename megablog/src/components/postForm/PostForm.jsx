import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/conf";
import { Button, Input, RTE, Select } from "../index";

function PostForm({ post }) {
  const { register, submithandle, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      slug: post?.slug || "",
      status: post?.status || active,
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (data) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : null,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      const fileId = file.$id;
      data.featuredImage = fileId;
      const dbPost = await appwriteService.createPost({
        ...data,
        userId: userData.$id,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.id}`);
      }
    }

    const slugTransform = (value) => {
      if (value && typeof value === "string")
        return value
          .trim()
          .toLocaleLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, "-");

      return "";
    };

    useEffect(() => {
      const subscription = watch((value, { name }) => {
        if (name == "title") {
          setValue("slug", slugTransform(value.title), {
            shouldValidate: true,
          });
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }, [navigate, slugTransform, setValue]);
  };

  return (
    <form onSubmit={submithandle(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          type="text"
          placeholder="Enter your title"
          className="py-2 px-3 my-1"
          {...register("tilte", { required: true })}
        />

        <Input
          label="slug"
          type="text"
          placeholder="See your slug"
          className="py-2 px-3 my-1  "
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.target.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label="content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="image"
          type="file"
          accept="image/jpeg, image/jpg, imag/svg, image/png, image/gif"
          placeholder="add your image"
          className="py-2 px-3 my-1"
          {...register("image")}
        />

        {post && (
          <div className="w-full h-auto object-contain">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              className="rounded-lg w-full h-30"
              alt={post.title}
            />
          </div>
        )}

        <Select
          option={["active", "inactive"]}
          label="status"
          className="py-2 px-3 my-1"
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
