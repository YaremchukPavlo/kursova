// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import staticImage from "./Static.jpg";

// const CarOffers = () => {
//   const [cars, setCars] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     axios.get("/cars/list")
//       .then((res) => {
//         if (!res.data) {
//           throw new Error('Response data is empty');
//         }
//         setCars(res.data.cars);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);

//   const pageNumbers = Array(Math.ceil(cars.length / itemsPerPage))
//     .fill()
//     .map((_, i) => i + 1);

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const filteredCars = cars.filter((car) => {
//       return (
//         car.mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         car.model.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });
//     setSearchResults(filteredCars);
//   };

//   return (
//     <div className="car-offers">
//       <h2 className="text-start">Cars offers</h2>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchInputChange}
//           placeholder="Search by mark or model"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {searchResults.length === 0 && searchTerm !== "" && <p>No Result</p>}
//       {searchResults.length > 0 && (
//         <div className="rer col-12">
//           {searchResults.map((car, index) => (
//             <div key={index} className="car-offer-item card card-body mt-3 d-flex flex-row">
//               <div className="col-3 p-1  d-flex justify-content-center">
//                 {car.image && (
//                   <img
//                     className="card card-body"
//                     src={staticImage}
//                     alt={car.mark}
//                     style={{ maxWidth: "200px" }}
//                   />
//                 )}
//                 {!car.image && (
//                   <img
//                     className="card card-body"
//                     src={staticImage}
//                     alt="Static"
//                     style={{ maxWidth: "200px" }}
//                   />
//                 )}
//               </div>
//               <div className=" col-5 m-2 d-flex flex-column align-items-center" style={{ position: 'relative' }}>
//   <div className="col-12 d-flex flex-column align-items-center">
//     <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
//     <div className="p-1 d-flex justify-content-center">{car.model}</div>
//   </div>
//   <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
// </div>
//               <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>View</Link></div>
//             </div>
//           ))}
//         </div>
//       )}
//       {searchResults.length === 0 && searchTerm === "" && (
//         <div className="rer col-12">
//           {currentItems.map((car, index) => (
//             <div key={index} className="car-offer-item card card-body mt-3 d-flex flex-row">
//               <div className="col-3 p-1  d-flex justify-content-center">
//                 {car.image && (
//                   <img
//                     className="card card-body"
//                     src={staticImage}
//                     alt={car.mark}
//                     style={{ maxWidth: "200px" }}
//                   />
//                 )}
//                 {!car.image && (
//                   <img
//                     className="card card-body"
//                     src={staticImage}
//                     alt="Static"
//                     style={{ maxWidth: "200px" }}
//                   />
//                 )}
//               </div>
//               <div className=" col-5 m-2 d-flex flex-column align-items-center" style={{ position: 'relative' }}>
//   <div className="col-12 d-flex flex-column align-items-center">
//     <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
//     <div className="p-1 d-flex justify-content-center">{car.model}</div>
//   </div>
//   <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
// </div>
//               <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>View</Link></div>
//             </div>
//           ))}
//         </div>
//       )}
//       <ul className="pagination d-flex justify-content-center">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${number === currentPage? "active" : ""}`}
//           >
//             <button
//               onClick={() => handlePageClick(number)}
//               className="page-link mt-3"
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState("");

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

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredCars = cars.filter((car) => {
      return (
        car.mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredCars);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    if (e.target.value) {
      const sortedResults = sortedCars();
      setSearchResults(sortedResults);
    } else {
      setSearchResults(cars.slice(indexOfFirstItem, indexOfLastItem));
    }
  };

  const sortedCars = () => {
    if (sortOption === "alphabetical") {
      return searchResults.sort((a, b) => a.mark.localeCompare(b.mark));
    } else if (sortOption === "year") {
      return searchResults.sort((a, b) => a.year - b.year);
    } else {
      return searchResults;
    }
  };

  return (
    <div className="car-offers">
      <h2 className="text-start">Cars offers</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search by mark or model"
        />
        <button type="submit">Search</button>
      </form>
      <div className="sort-input">
        <label>Sort by:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Select an option</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="year">Year</option>
        </select>
      </div>
      {searchResults.length === 0 && searchTerm!== "" && <p>No Result</p>}
      {searchResults.length > 0 && (
        <div className="rer col-12">
          {searchResults.map((car, index) => (
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
              <div className=" col-5 m-2 d-flex flex-column align-items-center" style={{ position: 'elative' }}>
                <div className="col-12 d-flex flex-column align-items-center">
                  <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
                  <div className="p-1 d-flex justify-content-center">{car.model}</div>
                </div>
                <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>View</Link></div>
            </div>
          ))}
        </div>
      )}
      {searchResults.length === 0 && searchTerm === "" && (
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
              <div className=" col-5 m-2 d-flex flex-column align-items-center" style={{ position: 'elative' }}>
                <div className="col-12 d-flex flex-column align-items-center">
                  <div style={{ fontFamily: "Ubuntu Sans Mono", fontWeight: 400 }}>{car.mark}</div>
                  <div className="p-1 d-flex justify-content-center">{car.model}</div>
                </div>
                <div className="col-12 d-flex justify-content-start" style={{ position: 'absolute', bottom: 0 }}><h8>Шепетівка, Хмельницький - 14.08.24</h8></div>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center" ><Link to={`/car-details/${car.id}`} className="link" style={{ marginRight: "50px" }}>View</Link></div>
            </div>
          ))}
        </div>
      )}
      <ul className="pagination d-flex justify-content-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage? "active" : ""}`}
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
  );
};

export default CarOffers;