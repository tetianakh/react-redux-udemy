import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
            <header>
              <nav>
                <ul>
                  <li><NavLink
                    to="/"
                    exact
                    {/* can change the name of applied class when the link is active: */}
                    activeClassName='active'
                    >Home</NavLink ></li>
                  <li><NavLink to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}>New Post</NavLink></li>
                </ul>
              </nav>
            </header>
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;
