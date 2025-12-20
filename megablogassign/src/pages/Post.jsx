import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import appwriteService from "../appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postSlice";
import { Link } from "react-router";
import { Container, Button } from "../components";

function Post({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  // const post = useSelector((state) => state.post);
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.$id === userData.$id : false;
  useEffect(() => {
    if (slug) {
      appwriteService.getPost().then((post) => {
        if (post) {
          dispatch(setPost(post));
        }
        navigate("/");
      });
    }
    navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((post) => {
      if (post) {
        dispatch(deletePost(post));
      }
      navigate("/");
    });
  };

  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col">
          {post && (
            <div className="w-full h-auto ">
              <img
                className="w-full h-40 rounded-xl object-contain"
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
            <div className="flex justify-center mt-2">
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
