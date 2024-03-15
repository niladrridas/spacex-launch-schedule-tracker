import React, { useState, useEffect } from 'react';
import { fetchUpcomingLaunches } from '../services/SpaceXService';

function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function fetchLaunches() {
      const data = await fetchUpcomingLaunches();
      setLaunches(data);
    }
    fetchLaunches();
  }, []);

  return (
    <div className="launch-list">
      <h2>Upcoming Launches</h2>
      {launches.map(launch => (
        <div key={launch.id} className="launch-card">
          <h3>{launch.name}</h3>
          <p>Date: {launch.date}</p>
          <p>Rocket: {launch.rocket}</p>
          <p>Launch Site: {launch.launchSite}</p>
        </div>
      ))}
    </div>
  );
}

export default LaunchList;
