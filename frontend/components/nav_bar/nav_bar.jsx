import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="login_out">
      <p>Hello, {currentUser.username}</p>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="login_out">
      <Link className="btn login_out_child" to="/signup">Sign Up</Link>
      <p className="login_out_child"> or </p>
      <Link className="btn login_out_child" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
    
      <img className="spiral-logo" src="https://gdurl.com/EuYB"  />
      <h1 className="logo"><Link className="home_btn nav-bar-child" to="/">Cassandra</Link></h1>
      <div className="navbar-navigation">

        <div class="dropdown nav-bar-child">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
            <a href="#"><Link  to={{ pathname: '/posts', state: { category: 'Software Development' } }}>Software Development</Link></a>
            <a href="#"><Link to={{ pathname: '/posts', state: { category: 'Economics' } }}>Economics</Link></a>
            <a href="#"><Link to={{ pathname: '/posts', state: { category: 'Mathematics' } }}>Mathematics</Link></a>
            <a href="#"><Link to={{ pathname: '/posts', state: { category: '' } }}>All Categories</Link></a>
        </div>
      </div>
        <Link className="nav_btn nav-bar-child" to="/posts">Recources</Link>
        <Link className="nav_btn nav-bar-child" to="/about">About</Link>
      </div>
        {display}
    </header>
  );
};
