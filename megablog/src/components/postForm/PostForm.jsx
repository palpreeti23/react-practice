import React, { useCallback } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/conf";
import { Button, Input, RTE, Select } from "../index";

function PostForm({ post }) {
  // const { register, handleSubmit, watch, control, setValue, getValues } =
  //   useForm({
  //     defaultValues: {
  //       title: post?.title || "",
  //       content: post?.content || "",
  //       slug: post?.$id || "",
  //       status: post?.status || "active",
  //     },
  //   });

  // const navigate = useNavigate();
  // const userData = useSelector((state) => state.auth.userData);

  // console.log(userData);

  // const submit = async (data) => {
  //   if (post) {
  //     const file = data.image[0]
  //       ? await appwriteService.uploadFile(data.image[0])
  //       : null;
  //     if (file) {
  //       appwriteService.deleteFile(post.featuredImage);
  //     }

  //     const dbPost = await appwriteService.updatePost(post.$id, {
  //       ...data,
  //       featuredImage: file ? file.$id : undefined,
  //     });

  //     if (dbPost) {
  //       navigate(`/post/${dbPost.$id}`);
  //     }
  //   } else {
  //     const images = data.image[0];
  //     if (images) {
  //       const file = await appwriteService.uploadFile(images);
  //       if (file) {
  //         const fileId = file.$id;
  //         data.featuredImage = fileId;

  //         const dbPost = await appwriteService.createPost({
  //           ...data,
  //           userId: userData.$id,
  //         });

  //         if (dbPost) {
  //           navigate(`/post/${dbPost.$id}`);
  //         }
  //       } else {
  //         console.log("no file found in postform");
  //       }
  //     } else {
  //       console.log("no image is found in postform");
  //     }
  //   }
  // };

  // const slugTransform = useCallback((value) => {
  //   if (value && typeof value === "string")
  //     return value
  //       .trim()
  //       .toLowerCase()
  //       .replace(/[^a-zA-Z\d\s]+/g, "-")
  //       .replace(/\s/g, "-");

  //   return "";
  // }, []);

  // useEffect(() => {
  //   const subscription = watch((value, { name }) => {
  //     if (name === "title") {
  //       setValue("slug", slugTransform(value.title), {
  //         shouldValidate: true,
  //       });
  //     }
  //   });

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [, slugTransform, setValue]);

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
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
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        const featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          featuredImage,
          userId: userData.$id,
        });

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

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full h-auto">
      <div className="flex flex-wrap">
        <div className="w-2/3 px-2 pb-10">
          <Input
            label="Title"
            type="text"
            placeholder="Enter your title"
            className=" "
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            type="text"
            placeholder="See your slug"
            className=""
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <div className=" px-8">
            <RTE
              label="content"
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          </div>
        </div>

        <div className="w-1/3 px-2">
          <Input
            label="image"
            type="file"
            accept="image/jpeg, image/jpg, imag/svg, image/png, image/gif"
            placeholder="add your image"
            className="my-1 w-2/3"
            {...register("image")}
          />

          {post && (
            <div className="w-full h-auto object-contain">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                className="rounded-lg w-full h-30"
                alt={post.title}
              />
            </div>
          )}

          <Select
            option={["active", "inactive"]}
            label="status"
            className="py-1 px-3 my-1 w-2/3 rounded-xl"
          />

          <Button
            bgColor={
              post
                ? "bg-green-500 hover:bg-green-700 active:bg-green-800"
                : "bg-blue-400  hover:bg-blue-600 active:bg-blue-800"
            }
            className=""
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
