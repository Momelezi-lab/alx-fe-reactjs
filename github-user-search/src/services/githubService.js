import axios from "axios";

// Original function for the tests
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};

// Advanced search function
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  return response.data.items;
};