import React, { useState, useEffect } from "react";
import { TopicContentUI } from "./TopicContentUI";
import { ContentPoster, TopicTitle } from "../../molecules";
import { DefaultTemplate } from "../../templates";
import ReactPaginate from "react-paginate";
import { getContentByTopic } from "../../../api";

const topicLabels = {
  popular: "Popular",
  top_rated: "Top Rated",
  now_playing: "Now Playing",
};

export function TopicContent({ contentType, topic }) {
  const [content, setContent] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const onPageChange = ({ selected }) => setPage(selected + 1);

  const showContent = (item) => {
    const posterBaseUrl = "http://image.tmdb.org/t/p/w185/";

    return (
      <ContentPoster
        key={item.id}
        poster={posterBaseUrl + item.poster_path}
        title={item.title}
      />
    );
  };

  useEffect(() => {
    getContentByTopic(contentType, topic, page).then((data) => {
      setContent(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page, topic, contentType]);

  return (
    <DefaultTemplate>
      <TopicTitle title={topicLabels[topic]} />
      <TopicContentUI>
        {content ? content.map(showContent) : null}
      </TopicContentUI>
      <ReactPaginate
        onPageChange={onPageChange}
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        previousLabel='<'
        nextLabel='>'
        containerClassName='pagination'
        pageClassName='pagination__page'
      />
    </DefaultTemplate>
  );
}
