import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.error = null;
    },
    setPost: (state, action) => {
      state.post = action.payload;
      state.error = null;
    },
    addPost: (state, action) => {
      state.posts = state.posts.unshift(action.payload);
    },
    updatePost: (state, action) => {
      state.post = state.post.map((post) =>
        post.$id === action.payload.$id ? action.payload : post
      );
      state.post = action.payload;
    },
    deletePost: (state, action) => {
      state.post = state.post.filter((post) => {
        post.$id !== action.payload;
      });
      state.post = null;
    },
  },
});

export const { setPost, setPosts, addPost, updatePost, deletePost } =
  postSlice.actions;
export default postSlice.reducer;

// const initialState = {
//   posts: [
//     {
//       title: "title",
//       content: "content",
//       slug: "/",
//       status: "active",
//       featuredImage: "placeholder.png",
//       userId: "123",
//     },
//   ],
// };

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     addPost: (state, action) => {
//       const post = {
//         title: action.payload.title,
//         content: action.payload.content,
//         slug: action.payload.slug,
//         status: action.payload.status,
//         featuredImage: action.payload.featuredImage,
//         userId: action.payload.userId,
//       };
//       state.posts = state.posts.push(post);
//     },

//     deletePost: (state, action) => {
//       state.posts = state.posts.filter((post) => {
//         post.$id !== action.payload;
//       });
//     },
//     updatePost: (state, action) => {
//       state.posts = state.posts.map((post) => {
//         post.$id === action.payload.$id ? action.payload : post;
//       });
//     },

//     setPost:(state, action)=>{
//       state.posts = action.payload
//     }
//   },
// });

// export const { addPost, updatePost, deletePost } = postSlice.actions;
// export default postSlice.reducer;
