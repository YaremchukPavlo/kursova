import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Requests() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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

  return (
    <div className="requests">
      <h2 className="text-start">Requests</h2>

      {data ? (
        <div className="rer">
          {currentItems.map((request, index) => (
            <div
              key={index}
              className="car-offer-item col-11 card card-body m-3 d-flex flex-row"
            >
              <div className="col-3 p-1 d-flex justify-content-start">
                User: {request.user_email}
              </div>
              <div className="col-9 p-1 d-flex justify-content-end">
                {" "}
                <Link to={`/req-details/${request.id}`} className="link">
                  Переглянути
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
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import staticRequests from "./staticRequests";
// function Requests() {
//   const [data, setData] = useState(staticRequests); // Використовуємо статичні дані
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data
//     ? data.slice(indexOfFirstItem, indexOfLastItem)
//     : [];

//   const pageNumbers = data
//     ? Array(Math.ceil(data.length / itemsPerPage))
//         .fill()
//         .map((_, i) => i + 1)
//     : [];

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="requests">
//       <h2 className="text-start">Requests</h2>

//       {data ? (
//         <div className="rer col-12">
//           {currentItems.map((request, index) => (
//             <div
//               key={index}
//               className="car-offer-item card card-body mt-3 d-flex flex-row"
//             >
//               <div className="col-3 p-1 d-flex justify-content-start">
//                 User: {request.userEmail}
//               </div>
//               <div className="col-9 p-1 d-flex justify-content-end">
//                 {" "}
//                 <Link to={`/req-details/${request.id}`} className="link">
//                   Переглянути
//                 </Link>
//               </div>
//             </div>
//           ))}
//           <ul className="pagination d-flex justify-content-center">
//             {pageNumbers.map((number) => (
//               <li
//                 key={number}
//                 className={`page-item ${
//                   number === currentPage ? "active" : ""
//                 }`}
//               >
//                 <button
//                   onClick={() => handlePageClick(number)}
//                   className="page-link mt-3"
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
