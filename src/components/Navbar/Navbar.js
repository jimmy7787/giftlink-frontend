import React from 'react';

function Navbar({ username }) {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <h1>GiftLink</h1>
      <div style={{ float: 'right' }}>
        Logged in as: <strong>{username}</strong>
      </div>
    </nav>
  );
}

export default Navbar;
