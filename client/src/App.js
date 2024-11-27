import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import SidebarMenu from "./pages/search";
import Saved from "./pages/saved";
import Book from "./pages/book";
import { UserProvider } from "./utils/UserContext";
import ReviewPage from "./pages/reviews";
import React from 'react';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route path="/search" component={SidebarMenu} exact />
          <Route path="/saved" component={Saved} exact />
          <Route path="/book/:id" component={Book} />
          <Route path="/reviews/:id" component={ReviewPage} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
