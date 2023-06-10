import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">Ideas</li>
        <li className="sidebar-item">Communities</li>
        <li className="sidebar-item">Settings</li>
        <li className="sidebar-item">Profile</li>
      </ul>
    </div>
  );
};

// https://codesandbox.io/s/cocky-snow-jezquu?file=/src/App.js

export default Sidebar;
