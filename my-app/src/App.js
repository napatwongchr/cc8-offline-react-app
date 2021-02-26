import "./App.css";

function App() {
  return (
    <div>
      <div className="postapp-header">
        <h1>Post App</h1>
        <button className="add-post-button">Add Post</button>
      </div>

      <div className="postapp-postlist-container">
        <div className="postapp-postlist">
          <div className="postapp-post">
            <h4>Title: Post title</h4>
            <p>Post content</p>
            <div className="postapp-post-action-buttons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="postapp-post">
            <h4>Title: Post title</h4>
            <p>Post content</p>
            <div className="postapp-post-action-buttons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
