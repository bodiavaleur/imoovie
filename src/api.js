const axios = require("axios");
const apiKey = "6c2801c591a099c730bb311cf5db87a7";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getMoviesByTopic = async (topic, page = 1) => {
  const topicData = await api.get(
    `/movie/${topic}?api_key=${apiKey}&page=${page}`
  );
  return topicData.data;
};
