import React from 'react';
import LineChartWidget from '../components/LineChartWidget';
import BarChartWidget from '../components/BarChartWidget';
import RecentActivityWidget from '../components/RecentActivityWidget';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="widget">
        <LineChartWidget />
      </div>
      <div className="widget">
        <BarChartWidget />
      </div>
      <div className="widget">
        <RecentActivityWidget />
      </div>
    </div>
  );
};

export default Dashboard;
