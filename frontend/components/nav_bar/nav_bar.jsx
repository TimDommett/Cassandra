import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="login_out">
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="login_out">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo"><Link className="home_btn nav-bar-child" to="/">Cassandra</Link></h1>
      <div className="navbar-navigation">

        <div class="dropdown nav-bar-child">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
          <a href="#">Software Development</a>
          <a href="#">Economics</a>
          <a href="#">Mathemtics</a>
        </div>
      </div>
        <Link className="nav_btn nav-bar-child" to="/posts">Recources</Link>
        <Link className="nav_btn nav-bar-child" to="/about">About</Link>
      </div>
        {display}
    </header>
  );
};
