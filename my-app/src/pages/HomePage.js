/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { usePosts } from "../utilities/posts";
import { useSelector } from "react-redux";

function HomePage() {
  const { posts, isError, handleDeletePost } = usePosts();
  const counter = useSelector((state) => state.counter.counter);
  let history = useHistory();

  function handleAddPostClick() {
    history.push("/addpost");
  }

  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: rgb(254, 255, 67);
            font-size: 100px;
          `}
        >
          Post App
        </h1>
        <Button onClick={handleAddPostClick} primary={true}>
          Add Post
        </Button>
      </div>

      <div className="post-list">
        {isError && <h1>Something went wrong Please try again tmr.</h1>}
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h3
                onClick={() => {
                  history.push("/post/" + post.id);
                }}
              >
                Title: {post.title}
              </h3>
              <p>{post.content}</p>
              <div className="post-footer">
                <span>Author: John</span>
                <div className="post-footer-buttons">
                  <Button>Edit</Button>
                  <Button
                    onClick={function () {
                      handleDeletePost(post.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        css={css`
          text-align: center;
        `}
      >
        <h1>Counter: {counter}</h1>
      </div>
    </div>
  );
}

export default HomePage;
