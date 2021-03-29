/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function SinglePostPage() {
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
  }, []);

  return (
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
  );
}

export default SinglePostPage;
