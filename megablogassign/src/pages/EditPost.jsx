import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/conf";

function EditPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
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
