const axios = require("axios");
const apiKey = "6c2801c591a099c730bb311cf5db87a7";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getContentByTopic = async (contentType, topic, page = 1) => {
  /* Fetch movie or TV show data based on topic (popular, trending, etc.) */
  const topicData = await api.get(
    `/${contentType}/${topic}?api_key=${apiKey}&page=${page}`
  );
  topicData.data.results.forEach(
    (content) => (content["media_type"] = contentType)
  );
  return topicData.data;
};

export const searchContent = async (query, page = 1) => {
  /* Search movie, TV show, actor, etc. */
  const searchData = await api.get(
    `/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return searchData.data;
};

export const findById = async (type, contentId) => {
  /* Find details of content by IMDB id */
  const findData = await api.get(`/${type}/${contentId}?api_key=${apiKey}`);
  return findData.data;
};
