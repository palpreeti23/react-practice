import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/conf";

function home() {
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
      <div className="w-full ">
        <Container>
          <div className="bg-gray-300 w-full my-3 px-4">
            <h1 className="text-black font-bold text-3xltext-center">
              login to read posts
            </h1>
          </div>
        </Container>
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

export default home;
