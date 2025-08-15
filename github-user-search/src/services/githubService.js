import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Search GitHub users by multiple criteria
 * @param {Object} params - Search filters
 * @param {string} username - GitHub username (partial or full)
 * @param {string} location - Location filter
 * @param {number} minRepos - Minimum number of repositories
 * @returns {Promise<Array>} - List of matching users
 */

export async function fetchUserData(username, location, minRepos) {
  try {
     // Build GitHub Search API query
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {}
    });
    return response.data.items;
  } catch (error) {
    throw new Error("User not found");
  }
}
