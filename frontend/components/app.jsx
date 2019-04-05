import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PostIndexContainer from './posts/post_index_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PostFormContainer from './posts_form/post_form_container';
import CommentListContainer from './comments/comment_list_container';
import HomePage from './home/home';
import About from './about/about';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={HomePage} />
    <ProtectedRoute path="/posts" component={PostIndexContainer} />
    <Route path="/about" component={About} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/posts/new" component={PostFormContainer} />

  </div>
);

// <Route path="/posts/:post_id/comments" component={CommentListContainer} />
