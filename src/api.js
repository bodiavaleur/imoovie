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
  return topicData.data;
};

export const searchContent = async (query, page = 1) => {
  /* Search movie, TV show, actor, etc. */
  const searchData = await api.get(
    `/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return searchData.data;
};

export const findById = async (contentId) => {
  /* Find details of content by IMDB id */
  const content = await api.get(
    `/find/${contentId}?api_key=${apiKey}&external_source=imdb_id`
  );
  let data = content.data;
  // Find matched element from topics and pick first one
  data = Object.values(data).find((findData) => !!findData)[0];
  return data;
};
