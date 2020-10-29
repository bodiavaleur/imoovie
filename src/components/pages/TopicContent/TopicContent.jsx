import React, { useState, useEffect } from "react";
import { TopicContentUI } from "./TopicContentUI";
import { ContentPoster, Pagination, TopicTitle } from "../../molecules";
import { DefaultTemplate } from "../../templates";
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

  const showContent = (item) => (
    <ContentPoster
      key={item.id}
      poster={item.poster_path}
      title={item.title}
      link={`/content/${item.media_type}/${item.id}`}
    />
  );

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
      <Pagination onPageChange={onPageChange} pageCount={totalPages} />
    </DefaultTemplate>
  );
}
