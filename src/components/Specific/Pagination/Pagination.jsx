import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({pageCount,setPage}) => {

  const handlePageClick = (value) =>{
    console.log(value.selected+1)
    setPage(value.selected+1)
  }

  return (
    <>
      
      <ReactPaginate
        className="pagination pagination-sm justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<"
      renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination