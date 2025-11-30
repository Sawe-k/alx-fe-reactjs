import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});


export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};


export const advancedUserSearch = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await api.get(
      `/search/users?q=${query}&page=${page}&per_page=30`
    );

    return response.data;
  } catch (error) {
    console.error("Error in advanced search:", error);
    throw error;
  }
};
