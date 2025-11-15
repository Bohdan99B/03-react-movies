import axios from "axios";

const token = import.meta.env.VITE_TMDB_TOKEN;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
