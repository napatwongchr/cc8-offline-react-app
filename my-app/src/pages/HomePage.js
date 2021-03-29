/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);

  let history = useHistory();

  useEffect(function () {
    async function getPosts() {
      try {
        let response = await fetch("http://localhost:8000/posts");
        let data = await response.json();
        setPosts(data.data);
      } catch (error) {
        setIsError(true);
        console.log("error !");
      }
    }
    getPosts();
  }, []);

  function handleAddPostClick() {
    history.push("/addpost");
  }

  async function handleDeletePost(postId) {
    console.log("postId:", postId);
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
    </div>
  );
}

export default HomePage;
