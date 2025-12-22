import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postSlice";

function EditPost() {
  const { post } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          dispatch(setPost(post));
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div className="w-full">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
