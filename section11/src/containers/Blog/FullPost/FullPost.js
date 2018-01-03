import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
      this.loadPost();
    }

    componentDidUpdate () {
      this.loadPost();
    }

    loadPost () {
      const postId = this.getId();
      if (postId) {
        if ( this.state.loadedPost === null || (this.state.loadedPost.id !== postId) ) {
            axios.get( '/posts/' + postId )
                .then( response => {
                    // console.log(response);
                    this.setState( { loadedPost: response.data } );
                } );
        }
      }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.getId())
            .then(response => {
                console.log(response);
            });
    }

    getId () {
      return parseInt(this.props.match.params.postId, 10);
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.getId() ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
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
