import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/postSlice";
import { Link } from "react-router";
import { Container, PostCard } from "../components";

function Home() {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
      }
    });
  }, []);

  if (!posts) {
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
          {posts?.map((posts) => (
            <div key={posts.$id} className="my-2 mx-8">
              <PostCard {...posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
