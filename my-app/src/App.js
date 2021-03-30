import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPostPage from "./pages/AddPostPage";
import SinglePostPage from "./pages/SinglePostPage";
import CounterPage from "./pages/CounterPage";
import { CounterProvider } from "./contexts/Counter";

import "./App.css";

function App() {
  return (
    <div>
      <CounterProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/counter" component={CounterPage} />
            <Route path="/post/:postId" component={SinglePostPage} />
            <Route path="/addpost" component={AddPostPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </CounterProvider>
    </div>
  );
}

export default App;
