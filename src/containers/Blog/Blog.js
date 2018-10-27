import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from './FullPost/FullPost'

class Blog extends Component {
  render() {
    return <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="my-active" activeStyle={{ textDecoration: "underline" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/new-post", hash: "#submit", search: "?quick-submit=true" }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Posts} />
        <Route exact path="/new-post" component={NewPost} />
        <Route exact path="/posts/:postId" component={FullPost} />
      </div>;
  }
}

export default Blog;
