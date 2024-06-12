
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import staticImage from "./Static.jpg";
import "../../App.css"
function CarOffers() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterMark, setFilterMark] = useState("");
  const [filterModel, setFilterModel] = useState("");

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

  const handleFilterChange = (e) => {
    if (e.target.name === "year") {
      setFilterYear(e.target.value);
    } else if (e.target.name === "mark") {
      setFilterMark(e.target.value);
    } else if (e.target.name === "model") {
      setFilterModel(e.target.value);
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filteredCars = cars.filter((car) => {
      return (
        (filterYear === "" || car.year === parseInt(filterYear)) &&
        (filterMark === "" || car.mark.toLowerCase().includes(filterMark.toLowerCase())) &&
        (filterModel === "" || car.model.toLowerCase().includes(filterModel.toLowerCase()))
      );
    });
    setSearchResults(filteredCars);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedCars = () => {
    if (sortOption === "alphabetical") {
      return [...searchResults].sort((a, b) => a.mark.localeCompare(b.mark));
    } else if (sortOption === "year") {
      return [...searchResults].sort((a, b) => a.year - b.year);
    } else {
      return [...searchResults]; // Створіть новий масив для повернення
    }
  };

  const handleSortSubmit = () => {
    if (sortOption) {
      const sortedResults = sortedCars();
      setSearchResults(sortedResults);
    } else {
      setSearchResults(cars.slice(indexOfFirstItem, indexOfLastItem));
    }
  };

  return (
    <div>
      <h2 className="text-start mb-3">Cars offers</h2>
      {/* {data ? ( */}
      <div className="row">
        <div className="col-12">
          <label>Sort by:</label>
          <form onSubmit={handleSearchSubmit} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder="Search by mark or model"
                className="form-control"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="filter-input mb-3">
            <label>Filter by:</label>
            <div className="row">
              <div className="col-3">
                <input
                  type="number"
                  name="year"
                  value={filterYear}
                  onChange={handleFilterChange}
                  placeholder="Year"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  name="mark"
                  value={filterMark}
                  onChange={handleFilterChange}
                  placeholder="Mark"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  name="model"
                  value={filterModel}
                  onChange={handleFilterChange}
                  placeholder="Model"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <button onClick={handleFilterSubmit} className=" btn btn-primary" style={{ width: "100%" }}>
                  Filter
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="sort-input mb-3">
            <label>Sort by:</label>
            <div className="row">
              <div className="col-9">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="form-control"
                >
                  <option value="">For updates
                  </option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="year">Year</option>
                </select>
              </div>
              <div className="col-3">
                <button onClick={handleSortSubmit} className="btn btn-primary" style={{ width: "100%" }}>
                  Apply sort
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {searchResults.length === 0 && searchTerm !== "" && (
        <p className="text-center mb-3">No Result</p>
      )}
      {(searchResults.length > 0 || currentItems.length > 0) && (

        <div className="row cars p-3">
          {(searchResults.length > 0 ? searchResults : currentItems).map((car, index) => (
            <div key={index} className="card mb-3 d-flex flex-row align-items-center p-3" >
              <div className="col-3 d-flex justify-content-center" style={{ width: "100%" }}>
                {car.image && (
                  <img
                    src={staticImage}
                    alt={car.mark}
                    style={{ maxWidth: "150px" }}
                    className="img-fluid"
                  />
                )}
                {!car.image && (
                  <img
                    src={staticImage}
                    alt="Static"
                    style={{ maxWidth: "200px" }}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="col-6 d-flex flex-column justify-content-between card-body">
                <div className="d-flex justify-content-start mb-3">
                  <h4 className="mb-0 me-3" style={{ fontWeight: 'bold' }}>{car.mark}</h4>
                  <h4 className="mb-0" style={{ fontWeight: 'bold' }}>{car.model}</h4>
                </div>
                <p className="mb-0 align-self-start">
                  <small>{car.year} year </small>
                </p>
              </div>



              <div className="col-5 d-flex justify-content-center">
                <Link to={`/car-details/${car.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <ul className="pagination justify-content-center mb-3">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
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
    //   ) : (
    //     "Loading..."
    //   )}
    // </div>
  );
}
export default CarOffers;
