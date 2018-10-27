import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {

	state = {
		loadedPost: null
	}

    componentDidMount() {
			if(this.props.match.params.postId) {
				if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
					Axios.get(`/posts/${this.props.match.params.postId}`).then(
            response => {
              this.setState({ loadedPost: response.data });
              //console.log(response.data);
            }
          );
				}
			}
		}

		deletePostHandler = () => {
			Axios.delete(`/posts/${this.props.id}`)
				.then(res => {
					console.log(res);
					
				})
		}

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
				if(this.props.id) {
					post = <p style={{ textAlign: 'center' }}>Loading...</p>;
				}
				if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        
        return post;
    }
}

export default FullPost;