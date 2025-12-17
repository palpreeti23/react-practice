import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        // console.log(posts.documents.featuredImage);
      }
    });
  }, []);
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap justify-center">
          {posts?.map((posts) => (
            <div className="mx-2" key={posts.$id}>
              <PostCard {...posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
