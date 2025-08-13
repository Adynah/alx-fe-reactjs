import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function getUser(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: apiKey ? `token ${apiKey}` : undefined
    }
  });
  return response.data;
}
