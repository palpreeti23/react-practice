import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/postSlice";

function AllPosts() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
      }
    });
  }, []);

  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap justify-center mt-8">
          {posts?.map((posts) => (
            <div className="mx-3" key={posts.$id}>
              <PostCard {...posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
