
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Додай імпорт Axios
// import carData from "./carData";

// const CarOffers = () => {
//   const [cars, setCars] = useState([]); // Стан для даних автомобілів
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   useEffect(() => {
//     axios.get("/cars/list")
//       .then((res) => {
//         if (!res.data) {
//           throw new Error('Response data is empty');
//         }
//         setCars(res.data.cars); // Оновлюємо стан з отриманими даними
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem); // Використовуємо дані зі стану

//   const pageNumbers = Array(Math.ceil(cars.length / itemsPerPage))
//     .fill()
//     .map((_, i) => i + 1);

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="car-offers">
//       <h2 className="text-start">Cars offers</h2>
//       <div className="rer col-12">
//         {currentItems.map((car, index) => (
//           <div key={index} className="car-offer-item card card-body mt-3 d-flex flex-row">
//             <div className="col-3 p-1  d-flex justify-content-center">{car.image && (<img className="card card-body" src={`https://diplom-l4nh.onrender.com/uploads/cars/${car.image}`} alt={car.mark} style={{ maxWidth: "200px" }} />)}</div>
//             <div className=" col-5 m-2 d-flex justify-content-center align-items-center flex-column" style={{ position: 'relative' }}>
//               <div className="col-12 d-flex justify-content-between" style={{ position: 'absolute', bottom: 90 }}>
//                 <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
//                 <div className="p-1 d-flex justify-content-center">{car.model}</div>
//               </div>
//               <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
//             </div>
//             <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>Переглянути</Link></div>
//           </div>
//         ))}
//         <ul className="pagination d-flex justify-content-center">
//           {pageNumbers.map((number) => (
//             <li
//               key={number}
//               className={`page-item ${number === currentPage ? "active" : ""}`}
//             >
//               <button
//                 onClick={() => handlePageClick(number)}
//                 className="page-link mt-3"
//               >
//                 {number}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CarOffers;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import staticImage from "./Static.jpg";   

const CarOffers = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios.get("/cars/list")
      .then((res) => {
        if (!res.data) {
          throw new Error('Response data is empty');
        }
        setCars(res.data.cars);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = Array(Math.ceil(cars.length / itemsPerPage))
    .fill()
    .map((_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="car-offers">
      <h2 className="text-start">Cars offers</h2>
      <div className="rer col-12">
        {currentItems.map((car, index) => (
          <div key={index} className="car-offer-item card card-body mt-3 d-flex flex-row">
            <div className="col-3 p-1  d-flex justify-content-center">
              {car.image && (
                <img
                  className="card card-body"
                  src={staticImage}
                  alt={car.mark}
                  style={{ maxWidth: "200px" }}
                />
              )}
              {!car.image && (
                <img
                  className="card card-body"
                  src={staticImage}
                  alt="Static"
                  style={{ maxWidth: "200px" }}
                />
              )}
            </div>
            <div className=" col-5 m-2 d-flex justify-content-center align-items-center flex-column" style={{ position: 'relative' }}>
              <div className="col-12 d-flex justify-content-between" style={{ position: 'absolute', bottom: 90 }}>
                <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
                <div className="p-1 d-flex justify-content-center">{car.model}</div>
              </div>
              <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>Переглянути</Link></div>
          </div>
        ))}
        <ul className="pagination d-flex justify-content-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              <button
                onClick={() => handlePageClick(number)}
                className="page-link mt-3"
>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarOffers;