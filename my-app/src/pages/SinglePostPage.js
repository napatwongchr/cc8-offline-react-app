/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { usePosts } from "../utilities/posts";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const { posts } = usePosts();
  const [post, setPost] = useState({});
  let params = useParams();

  useEffect(() => {
    async function getPostById() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postId
      );
      let data = await response.json();
      setPost(data.data);
    }

    getPostById();
  }, [params.postId]);

  return (
    <div>
      <div>
        <div className="postapp-header">
          <h1
            css={css`
              color: rgb(254, 255, 67);
              font-size: 50px;
            `}
          >
            Single Post Page
          </h1>
        </div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <hr />
      <div>
        <h2>Post list</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h3>Title: {post.title}</h3>
              <p>{post.content}</p>
              <div className="post-footer">
                <span>Author: John</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SinglePostPage;
