import React, { Component } from "react";
import axios from "./../../../axios";
import Post from "./../../../components/Post/Post";
import "./Posts.css";

export class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // fetch(POST_URL)
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    axios
      .get(`/posts`)
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Khan"
          };
        });
        this.setState({ posts: updatedPosts });
        //console.log(response);
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
            title={post.title} // {this.props} one way to pass the props to Post component
            author={post.author}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
