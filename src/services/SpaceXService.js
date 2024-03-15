const axios = require('axios');

// Function to fetch upcoming launches from the SpaceX API
async function fetchUpcomingLaunches() {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming launches:', error);
    return [];
  }
}

// Export functions for use in other files
module.exports = {
  fetchUpcomingLaunches,
};
