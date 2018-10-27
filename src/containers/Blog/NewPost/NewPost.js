import React, { Component } from "react";

import "./NewPost.css";
import Axios from "../../../axios";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Aiub",
    submitted: false
	};
	
	componentDidMount() {
		// if unauth => this.props.history.replace('/posts');
		console.log(this.props);
		
	}

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };

    Axios.post(`/posts`, data).then(respond => {
      //console.log(respond);
			//this.setState({ submitted: true });
			this.props.history.push('/posts'); // by history.push we con go to previous page, history.replace is works as redirecting we can't go to previous page
    });
  };

  render() {
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/" />;
    // }

    return (
      <div className="NewPost">
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Ayub">Ayub</option>
          <option value="Khan">Khan</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
