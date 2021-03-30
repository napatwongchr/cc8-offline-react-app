import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    postsLoading: (state) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    },
    postsReceived: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.posts = action.payload.data;
      }
    },
  },
});

export const { postsLoading, postsReceived } = postsSlice.actions;

const getPosts = () => async (dispatch) => {
  dispatch(postsLoading());
  let response = await fetch("http://localhost:8000/posts");
  let posts = await response.json();
  dispatch(postsReceived(posts));
};

export { getPosts };

export default postsSlice.reducer;
