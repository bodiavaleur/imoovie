import React from "react";
import ReactPaginate from "react-paginate";

export function Pagination({ onPageChange, totalPages }) {
  return (
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
  );
}
