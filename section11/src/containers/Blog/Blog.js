import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts'

class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
            <header>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/new-post">New Post</a></li>
                </ul>
              </nav>
            </header>
            <Route path="/" exact render={ () => <h1>Home</h1> }/> {/* only renders on / */}
            <Route path="/" render={ () => <h1>Home2</h1> }/> {/* renders always (every path starts with /) */}
            </div>
        );
    }
}

export default Blog;
