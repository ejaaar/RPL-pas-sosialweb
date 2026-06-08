import React from 'react';
import '../styles/msg.css';

function Msg() {
  return (
    <div className="messages-container">
     
      <div className="messages-header">
        <h2>Messages</h2>
      </div>

      <div className="messages-content">
        <h1 className="empty-title">Welcome to your inbox!</h1>
        <p className="empty-description">
          Drop a line, share posts, and more with private conversations between you and others on this platform.
        </p>
      </div>
    </div>
  );
}

export default Msg;