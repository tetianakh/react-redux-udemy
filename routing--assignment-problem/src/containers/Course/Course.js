import React, { Component } from 'react';

class Course extends Component {

    render () {
      const id = this.props.match.params.postId;
      let myPost = this.props.courses.filter(p => { return p.id == id});
      if (myPost.length !== 1) {
        return null;
      }
      myPost = myPost[0];
        return (
            <div>
                <h1>{myPost.title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;
