import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
class Blog extends Component {

  state = {
    posts: [],
    selectedId: null,
    error: false
  }

  componentDidMount() {
    // fetch(POST_URL)
    //   .then(response => response.json())
    //   .then(data => console.log(data))


  axios.get(POST_URL)
   .then(response => {
     const posts = response.data.slice(0, 4);
     const updatedPosts = posts.map(post => {
       return {
         ...post,
         author: "Khan"
       }
     })
     this.setState({posts: updatedPosts})
      //console.log(response);
   })
   .catch(error => {
     this.setState({error: true})
   })
}

  postSelectedHandler = (id) => {
    this.setState({selectedId: id})
  }

    render () {
      let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
      if (!this.state.error) {
        posts = this.state.posts.map(post => {
          return <Post
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
            title={post.title}
            author={post.author} />;
        })
      }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;