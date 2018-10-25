import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
class Blog extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    // fetch(POST_URL)
    //   .then(response => response.json())
    //   .then(data => console.log(data))


  axios.get(POST_URL)
   .then(response => {
      this.setState({posts: response.data})
      //console.log(response);
   })


}

    render () {
      const posts = this.state.posts.map(post => {
        return <Post key={post.id} title={post.title}/>
      })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;