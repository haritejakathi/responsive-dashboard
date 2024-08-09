import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const RecentActivityWidget = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const result = await axios.get('https://mockapi.io/recentactivities');
      setActivities(result.data);
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <h3>Recent Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityWidget;
