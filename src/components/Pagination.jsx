import React from "react";

function Pagination({ productsLength }) {
  const pageSize = 10;
  const pageCount = Math.ceil(products.length / pageSize);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>

          {pageCount.map((p, i) => (
            <li className="page-item" key={i}>
              <a className="page-link" href={i}>
                {i}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
