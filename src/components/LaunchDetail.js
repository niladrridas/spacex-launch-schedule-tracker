import React, { useState, useEffect } from 'react';
import { fetchLaunchDetails } from '../services/SpaceXService';

function LaunchDetail({ launchId }) {
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    async function fetchLaunch() {
      const data = await fetchLaunchDetails(launchId);
      setLaunch(data);
    }
    fetchLaunch();
  }, [launchId]);

  if (!launch) {
    return <div>Loading...</div>;
  }

  return (
    <div className="launch-detail">
      <h2>{launch.name}</h2>
      <p>Date: {launch.date}</p>
      <p>Rocket: {launch.rocket}</p>
      <p>Launch Site: {launch.launchSite}</p>
      <p>Details: {launch.details}</p>
    </div>
  );
}

export default LaunchDetail;
