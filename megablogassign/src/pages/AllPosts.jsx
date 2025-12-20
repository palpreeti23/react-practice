import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/postSlice";
import { Container, PostCard } from "../components";

function AllPosts() {
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
