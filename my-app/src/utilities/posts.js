import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      let response = await fetch("http://localhost:8000/posts");
      let posts = await response.json();
      setPosts(posts.data);
    } catch (error) {
      setIsError(true);
    }
  }

  async function handleDeletePost(postId) {
    let response = await fetch("http://localhost:8000/posts/" + postId, {
      method: "DELETE",
    });

    if (response.ok) {
      let newPosts = posts.filter((post) => {
        return post.id !== postId;
      });
      setPosts(newPosts);
    }
  }

  return { posts, isError, handleDeletePost };
}
