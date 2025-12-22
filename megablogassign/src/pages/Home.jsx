import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/postSlice";

function Home() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getPosts([]).then((post) => {
      if (post) {
        dispatch(setPosts(post.documents));
      }
    });
  }, [dispatch]);

  if (posts.length === 0) {
    return (
      <div className="w-full">
        <div className=" w-full py-15 my-5 ">
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
    <div className="w-full h-auto">
      <Container>
        <div className="flex flex-col items-start">
          {posts.map((post) => (
            <div key={post.$id} className="my-2 mx-8">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
