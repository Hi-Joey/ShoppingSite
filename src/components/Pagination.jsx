import React from "react";

function Pagination({ pageCount, currentPage, setProductPage }) {
  const setPage = (page) => {
    setProductPage(page);
  };

  const ListItems = [];
  for (let i = 1; i <= pageCount; i++) {
    ListItems.push(
      <li
        className={currentPage === i ? "page-item active" : "page-item"}
        key={i}
      >
        <a className="page-link" onClick={() => setPage(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      {/* // allign the pagination to the center */}
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm">{ListItems}</ul>
      </nav>
    </div>
  );
}

export default Pagination;
