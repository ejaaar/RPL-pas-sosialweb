import React, { useState } from 'react';
import '../styles/notif.css';

function Notif() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="notifications-container">
      {/* Title Header */}
      <div className="notifications-header">
        <h2>Notifications</h2>
      </div>

      {/* Tabs Sub-navigation */}
      <div className="notifications-tabs">
        <button 
          className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          <span>All</span>
          {activeTab === 'All' && <div className="tab-indicator" />}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'Mentions' ? 'active' : ''}`}
          onClick={() => setActiveTab('Mentions')}
        >
          <span>Mentions</span>
          {activeTab === 'Mentions' && <div className="tab-indicator" />}
        </button>
      </div>

      {/* Empty State Content */}
      <div className="notifications-content">
        <h1 className="empty-title">Nothing to see here — yet</h1>
        <p className="empty-description">
          empty
        </p>
      </div>
    </div>
  );
}

export default Notif;