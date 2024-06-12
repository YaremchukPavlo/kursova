// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Requests() {
//   const [data, setData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [filterStatus, setFilterStatus] = useState(""); // Add a state for filter status

//   useEffect(() => {
//     axios.get("/help/list")
//      .then((res) => {
//         if (!res.data) {
//           throw new Error('Response data is empty');
//         }
//         setData(res.data.help_request); // Оновлюємо стан з отриманими даними
//       })
//      .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data
//    ? data.slice(indexOfFirstItem, indexOfLastItem)
//     : [];

//   const pageNumbers = data
//    ? Array(Math.ceil(data.length / itemsPerPage))
//        .fill()
//        .map((_, i) => i + 1)
//     : [];

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilterChange = (e) => {
//     setFilterStatus(e.target.value);
//     console.log('Filter status changed to:', filterStatus);
//   };

//   const filteredItems = currentItems.filter((item) => {
//     if (filterStatus === "") {
//       return true;
//     } else {
//       return item.status === filterStatus;
//     }
//     console.log('Filtered item:', item);
//   });

//   return (
//     <div className="requests">
//       <h2 className="text-start">Requests</h2>

//       <div className="filter-input mb-3">
//         <label>Filter by status:</label>
//         <select value={filterStatus} onChange={handleFilterChange} className="form-control">
//           <option value="">All</option>
//           <option value="pending">Pending</option>
//           <option value="accepted">Accepted</option>
//           <option value="declined">Declined</option>
//         </select>
//       </div>

//       {data? (
//         <div className="rer">
//           {filteredItems.map((request, index) => (
//             <div
//               key={index}
//               className="car-offer-item col-11 card card-body m-3 d-flex flex-row"
//             >
//               <div className="col-3 p-1 d-flex justify-content-start">
//                 User: {request.user_email}
//               </div>
//               <div className="col-9 p-1 d-flex justify-content-end">
//                 <Link to={`/req-details/${request.id}`} className="btn btn-primary">
//                   View
//                 </Link>
//               </div>
//             </div>
//           ))}
//         console.log('Rendered requests:', filteredItems);
//           <ul className="pagination m-3 d-flex justify-content-center">
//             {pageNumbers.map((number) => (
//               <li
//                 key={number}
//                 className={`page-item ${
//                   number === currentPage? "active" : ""
//                 }`}
//               >
//                 <button
//                   onClick={() => handlePageClick(number)}
//                   className="page-link"
//                 >
//                   {number}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         "Loading..."
//       )}
//     </div>
//   );
// }

// export default Requests;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Requests() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState(""); // Add a state for filter status
  const [filteredData, setFilteredData] = useState([]); // Add a state for filtered data

  useEffect(() => {
    axios.get("/help/list")
      .then((res) => {
        if (!res.data) {
          throw new Error('Response data is empty');
        }
        setData(res.data.help_request); // Оновлюємо стан з отриманими даними
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const pageNumbers = data
    ? Array(Math.ceil(data.length / itemsPerPage))
        .fill()
        .map((_, i) => i + 1)
    : [];

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleFilterSubmit = () => {
    if (filterStatus === "") {
      setFilteredData(currentItems);
    } else {
      setFilteredData(currentItems.filter((item) => item.status === filterStatus));
    }
  };

  return (
    <div className="requests">
      <h2 className="text-start">Requests</h2>

      <div className="filter-input mb-3">
        <label>Filter by status:</label>
        <select value={filterStatus} onChange={handleFilterChange} className="form-control">
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
        </select>
        <button onClick={handleFilterSubmit} className="btn btn-primary">
          Filter
        </button>
      </div>

      {data ? (
        <div className="rer">
          {filteredData.map((request, index) => (
            <div
              key={index}
              className="car-offer-item col-11 card card-body m-3 d-flex flex-row"
            >
              <div className="col-3 p-1 d-flex justify-content-start">
                User: {request.user_email}
              </div>
              <div className="col-9 p-1 d-flex justify-content-end">
                <Link to={`/req-details/${request.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          ))}
          <ul className="pagination m-3 d-flex justify-content-center">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  number === currentPage ? "active" : ""
                }`}
              >
                <button
                  onClick={() => handlePageClick(number)}
                  className="page-link"
                >
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