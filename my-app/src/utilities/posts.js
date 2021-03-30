import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/posts/postsSlice";

export function usePosts() {
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.status === "pending");
  const isError = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // TODO
  async function handleDeletePost(postId) {
    // let response = await fetch("http://localhost:8000/posts/" + postId, {
    //   method: "DELETE",
    // });
    // if (response.ok) {
    //   let newPosts = posts.filter((post) => {
    //     return post.id !== postId;
    //   });
    //   setPosts(newPosts);
    // }
  }

  return { posts, isError, isLoading, handleDeletePost };
}
