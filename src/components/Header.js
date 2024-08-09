import { Link } from 'react-router-dom';
import './Header.css';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="logo">Dashboard</div>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {
        (
    <header className="header">
      <div className="logo">Dashboard</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <div className="profile">
        <img src="profile-pic-url" alt="User" className="profile-pic" />
        <span className="notifications-icon">🔔</span>
      </div>
    </header>
  )}
    </header>
  );
};


  
export default Header;
