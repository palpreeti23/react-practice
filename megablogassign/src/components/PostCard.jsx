import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router";

function PostCard({ $id, featuredImage, title }) {
  const images = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : null;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full">
        <div className="flex flex-col justify-items-center">
          <img
            className="w-full h-30 object-contain rounded-lg"
            src={images}
            alt="content Image"
          />
          <h2 className="text-black font-bold text-xl text-center">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
