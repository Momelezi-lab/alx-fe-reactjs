import axios from "axios";

// Advanced search using GitHub Search API
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  // The Search API returns items array
  return response.data.items;
};