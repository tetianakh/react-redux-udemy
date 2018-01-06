import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

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
                    to="/posts"
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
              <Route path="/posts" component={Posts} />
              {/* Rediretion inside of Switch.
                The `from` param can be omitted to ale=ways redirect. */}
              <Redirect from="/" to="posts" />
            </Switch>
            </div>
        );
    }
}

export default Blog;
