import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import Counter from "../../redux-counter/containers/Counter";

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/posts"
                  activeClassName="my-active"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/counter"
                  activeClassName="my-active"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Counter
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* When use switch order is important */}
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}

          {/* <Route exact path="/new-post" component={NewPost} /> */}
          <Route path="/posts" component={Posts} />
          <Route path="/counter" component={Counter} />
          <Route render={() => <h1>Not Found</h1>} />
          <Redirect from="/" to="/posts/" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
