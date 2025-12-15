import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPost(post.document);
      }
    });
  });

  if (post.length === 0) {
    return (
      <div className="w-full">
        <div className=" w-full pt-15 my-5">
          <Link to="/login">
            <h1 className="text-black font-medium text-xl text-center hover:text-gray-700">
              Login to read posts
            </h1>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap flex-col justify-center">
          {post?.map((post) => {
            <div key={post.$id}>
              <PostCard {...post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
