import React from "react";
import Home from "../src/pages/home/Home"
import TopBar from "../src/components/topbar/topBar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Posts from "./components/posts/posts";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <TopBar />
    <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/posts/:postsId">
            <Single />
          </Route>
    </Switch>
    </Router>
      
  );
}

export default App;
