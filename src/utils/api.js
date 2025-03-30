import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=';

// Function to fetch repositories
export const fetchRepositoriesFromAPI = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
