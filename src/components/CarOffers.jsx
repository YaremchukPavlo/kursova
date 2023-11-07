import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CarOffers() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Змінено кількість елементів на сторінці на 4

  useEffect(() => {
    fetch('/cars/list')
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
    <div className="car-offers">
      <h2 className="text-center">Пропозиції автомобілів</h2>

      {data ? (
        <div className="rer col-12">
          {currentItems.map((car, index) => (
            <div key={index} className="car-offer-item card card-body m-3">
              {car.mark}
              <p>{car.model}</p>
              <Link to={`/car-details/${car.id}`}>Переглянути</Link>
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

export default CarOffers;
