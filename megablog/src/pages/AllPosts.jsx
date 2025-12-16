import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.document);
      }
    });
  });
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap justify-center">
          {posts?.map((posts) => {
            <div key={posts.$id}>
              <PostCard {...posts} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
