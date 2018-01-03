import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                  {/* can change the name of applied class when the link is active: */}
                  <li><NavLink
                    to="/"
                    exact
                    activeClassName='active'
                    >Posts</NavLink ></li>
                  <li><NavLink to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}>New Post</NavLink></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/new-post" exact component={NewPost} />
              <Route path="/" component={Posts} />
            </Switch>
            </div>
        );
    }
}

export default Blog;
