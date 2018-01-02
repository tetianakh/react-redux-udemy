import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
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
                    >Home</NavLink ></li>
                  <li><NavLink to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}>New Post</NavLink></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/new-post" exact component={NewPost} />
              <Route path="/:postId" exact component={FullPost} />
            </Switch>
            </div>
        );
    }
}

export default Blog;
