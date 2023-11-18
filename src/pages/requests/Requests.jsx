import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Requests() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Змінено кількість елементів на сторінці на 4

  useEffect(() => {
    fetch('/requests/all')
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const pageNumbers = data ? Array(Math.ceil(data.length / itemsPerPage)).fill().map((_, i) => i + 1) : [];

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="requests">
      <h2 className="text-center">Requests</h2>

      {data ? (
        <div className="rer">
          {currentItems.map((request, index) => (
            <div key={index} className="car-offer-item col-11 card card-body m-3 d-flex flex-row">
              <div className="col-4 p-1 d-flex justify-content-center">{request.userEmail}</div>
              <div className="col-8 p-1 d-flex justify-content-end"> <Link to={`/req-details/${request.id}`} className="link">Переглянути</Link></div>
            </div>
          ))}
          <ul className="pagination m-3 d-flex justify-content-center">
            {pageNumbers.map((number) => (
              <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                <button onClick={() => handlePageClick(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Requests;
