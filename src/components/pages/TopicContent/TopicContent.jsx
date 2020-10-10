import React, { useState, useEffect } from "react";
import { TopicContentUI } from "./TopicContentUI";
import { TopicTitle } from "../../molecules";
import { Poster } from "../../atoms";
import { DefaultTemplate } from "../../templates";
import ReactPaginate from "react-paginate";
import { getMoviesByTopic } from "../../../api";

const posterBaseUrl = "http://image.tmdb.org/t/p/w185/";
const topicLabels = {
  popular: "Popular",
  top_rated: "Top Rated",
};

export function TopicContent({ contentType, topic }) {
  const [content, setContent] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const onPageChange = ({ selected }) => setPage(selected + 1);

  useEffect(() => {
    getMoviesByTopic(topic, page).then((data) => {
      setContent(data.results);
      setTotalPages(data.totalPages);
    });
  }, [page, topic]);

  console.log("content :>> ", content);

  return (
    <DefaultTemplate>
      <TopicTitle title={topicLabels[topic]} />
      <TopicContentUI>
        {content
          ? content.map((item) => (
              <Poster key={item.id} img={posterBaseUrl + item.poster_path} />
            ))
          : null}
      </TopicContentUI>
      <ReactPaginate onPageChange={onPageChange} pageCount={totalPages} />
    </DefaultTemplate>
  );
}
