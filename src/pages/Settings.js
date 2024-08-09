import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
