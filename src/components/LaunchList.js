import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        async function fetchLaunches() {
            try {
                const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
                setLaunches(response.data);
            } catch (error) {
                console.error('Error fetching upcoming launches:', error);
            }
        }
        fetchLaunches();
    }, []);

    return (
        <div className="launch-list">
            <h2>Upcoming Launches</h2>
            {launches.map(launch => (
                <div key={launch.id} className="launch-card">
                    <h3>{launch.name}</h3>
                    <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
                    <p>Rocket: {launch.rocket}</p>
                    <p>Launch Site: {launch.launchpad}</p>
                </div>
            ))}
        </div>
    );
}

export default LaunchList;
