import React from 'react';

function Dashboard() {
  const username = 'dimitrios2026'; // hardcoded for now

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome back, {username}!</h1>
      <p>You are now logged in.</p>
    </div>
  );
}

export default Dashboard;
