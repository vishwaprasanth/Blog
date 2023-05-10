import React from "react";
import Home from "../src/pages/home/Home"
import TopBar from "../src/components/topbar/topBar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
    <TopBar />
    <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
          {user ? <Home /> :<Login />}
          </Route>
          <Route path="/write">
          {user ? <Write /> :<Register/>}
          </Route>
          <Route path="/settings">
          {user ? <Settings /> :<Register/>}
          </Route>
          <Route path="/posts/:postsId">
            <Single />
          </Route>
    </Switch>
    </Router>
      
  );
}

export default App;
