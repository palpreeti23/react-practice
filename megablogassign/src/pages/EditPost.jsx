import React, { useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/conf";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setPost } from "../store/postSlice";

function EditPost() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          dispatch(setPost(post));
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <Container>
      <PostForm post={post} />
    </Container>
  );
}

export default EditPost;
