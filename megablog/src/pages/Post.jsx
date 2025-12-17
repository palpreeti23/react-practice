import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { Container, Button } from "../components";
import { Link } from "react-router-dom";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        console.log("POST DATA:", post);
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((post) => {
      if (post) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  // const images = post.featuredImage
  //   ? appwriteService.getFilePreview(post.featuredImage)
  //   : null;

  // console.log(post.featuredImage);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col">
          {post && (
            <div className="w-full h-auto ">
              <img
                className="w-full h-20 rounded-xl object-cover"
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
              />
            </div>
          )}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center">{post.title}</h2>
          </div>
          <div className="w-full text-black font-medium text-xl px-2 text-center">
            {parse(post.content)}
          </div>

          {isAuthor && (
            <div className="flex">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="py-1 px-3 mr-2" bgColor="bg-blue-500">
                  Edit
                </Button>
              </Link>

              <Button
                className="py-1 px-3 "
                bgColor="bg-red-500"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Post;
