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
      <h1 className="logo">Cassandra</h1>
      <div>
        <Link className="home_btn" to="/">Home</Link>
        <div class="dropdown">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
          <a href="#">Software Development</a>
          <a href="#">Economics</a>
          <a href="#">Mathemtics</a>
        </div>
      </div>
        <Link className="nav_btn" to="/posts">Recources</Link>
        <Link className="nav_btn" to="/about">About</Link>
      </div>
      <div>
        {display}
      </div>
    </header>
  );
};
