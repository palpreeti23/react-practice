import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/conf";

export default function PostCard({ $id, featuredImage, title }) {
  return (
    <Link to={`post/${$id}`}>
      <div className="w-full">
        <div className="flex flex-col justify-items-center">
          <img
            className="w-full h-20 object-contain rounded-lg"
            src={
              featuredImage
                ? appwriteService.getFilePreview(featuredImage)
                : null
            }
            alt="content Image"
          />

          <h2 className="text-black font-bold text-xl text-center">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
