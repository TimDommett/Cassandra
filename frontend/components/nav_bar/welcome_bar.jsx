import React from 'react';

export default ({ user }) => (
  <header className="welcome-bar">
    <h4>Welcome { user.username }!</h4>
    <h1>Cassandra</h1>
  </header>
);
