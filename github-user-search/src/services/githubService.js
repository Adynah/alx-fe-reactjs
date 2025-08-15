import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetches a GitHub user's data by username.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - User data from GitHub API.
 */

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {}
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
}
