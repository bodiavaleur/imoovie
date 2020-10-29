import React, { useState, useEffect } from "react";
import { SearchPageUI } from "./SearchPageUI";
import { DefaultTemplate } from "../../templates";
import {
  ContentPoster,
  MovieList,
  Pagination,
  TopicTitle,
} from "../../molecules";
import { InputSearch } from "../../atoms";
import { searchContent } from "../../../api";

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = (evt) => setSearchQuery(evt.target.value);
  const onPageChange = ({ selected }) => setPage(selected + 1);

  useEffect(() => {
    searchContent(searchQuery, page).then((data) => setSearchData(data));
  }, [searchQuery, page]);

  return (
    <DefaultTemplate>
      <TopicTitle title='Find movie or TV show' />
      <SearchPageUI>
        <InputSearch placeholder='Search' onChange={handleSearch} />

        {searchQuery && (
          <>
            <MovieList>
              {searchData?.results.map((content) => (
                <ContentPoster
                  poster={content.poster_path}
                  title={content.title}
                  link={`/content/${content.media_type}/${content.id}`}
                />
              ))}
            </MovieList>
            <Pagination
              totalPages={searchData?.total_pages}
              onPageChange={onPageChange}
            />
          </>
        )}
      </SearchPageUI>
    </DefaultTemplate>
  );
}
