// import React from "react";
// import { Button } from "bootstrap";

// const FiltersAndSearch = () => {
//   return (
//     <div>
//       <div className="Search mt-3 col-10">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Recipient's username"
//           aria-label="Recipient's username"
//           aria-describedby="button-addon2"
//         />
//         <button
//           className="btn btn-outline-secondary col-2"
//           type="button"
//           id="button-addon2"
//         >
//           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB3klEQVRIS+2WbU3EQBCG7xyAg+IAFFAUAA6KAkABoABQwDkABxQFgALOATiA9wmzyaS3Xy1p7g+bTNq0u/PMvDO77XKxpbHcEndRC95RgPuyRsb9l2wt66cGXgIDuZJ1Boxx7vTwcmwAOXArZw+WZckvCpzJnkoTw/sU+FoTzl2WSPpijpGYoBrZoezEwW50z9riiIFx+mwryQRnyJkanV7cuiBPLcAsfAimpkBpJKBHsrdi+L8N92Fw1u3Z+uTSIZjIL2w2DZPLdOgUyR/t4UpXal4FJupXWWNSIdnYAZgAyHq3FtxqYqjt2GwDw2dNmfoU3EvdaRLbh1HVIBGnqPZpz7PBezC1pcYMZEKuKePbFmW3lgd7mQ60uKabh4GxG+iTomop8NQa+3KxpdYpyTzY78VeC2iOscN3dXYvD/cxzUXURakiEflSFT8csZMr7GWai1on5XJwfwZMOrnw1cr8WU29VxnNme+/YsVs8ZX6Ovmjk3mA32W9KdDoih3LukhQ2cMjBw6Z0yzIWBrIS3DhnGd+9ckVcw6U7GNZMT8A702JVtdQpiy89Ovjg6FrCQSJAfYGG55wVfAx4JLc/n0RPheYIDx8o9PnBAc4nb/xFzo3OFmef/CYzv3T3B9ZN2QfCD5GBgAAAABJRU5ErkJggg=="/>
//         </button>
//       </div>




// <div className="filters row d-flex ">
// <h2 className="d-flex justify-content-start mt-3">
// Filters
// </h2>
// <div className="filter_1 input-group  mt-3 mb-3 col-4" style={{ width: "50%" }}>
// <input type="text" className="form-control" aria-label="Text input with dropdown button"  placeholder="Username"/>
//   <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
//   <ul className="dropdown-menu dropdown-menu-end">
//     <li><a className="dropdown-item" href="#">Action</a></li>
//     <li><a className="dropdown-item" href="#">Another action</a></li>
//     <li><a className="dropdown-item" href="#">Something else here</a></li>
//     <li><hr className="dropdown-divider"/></li>
//     <li><a className="dropdown-item" href="#">Separated link</a></li>
//   </ul>
// </div>
// <div className="filter_2 input-group mt-3 mb-3 col-4" style={{ width: "50%" }}>
//   <input type="text" className="form-control" aria-label="Text input with dropdown button"  placeholder="Username"/>
//   <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
//   <ul className="dropdown-menu dropdown-menu-end">
//     <li><a className="dropdown-item" href="#">Action</a></li>
//     <li><a className="dropdown-item" href="#">Another action</a></li>
//     <li><a className="dropdown-item" href="#">Something else here</a></li>
//     <li><hr className="dropdown-divider"/></li>
//     <li><a className="dropdown-item" href="#">Separated link</a></li>
//   </ul>
// </div>
// <div className="filter_3 input-group  mt-3 mb-3 col-2" style={{ width: "25%" }}>
// <input type="text" className="form-control" aria-label="Text input with dropdown button"  placeholder="Username"/>
// </div>
// <div className="filter_3 input-group  mt-3 mb-3 col-2" style={{ width: "25%" }}>
// <input type="text" className="form-control" aria-label="Text input with dropdown button"  placeholder="Username"/>
// </div>
// </div>

// <div className="sort row d-flex">
// <h2 className="d-flex justify-content-start mt-3">
// Sort
// </h2>
// <div className="sort_1 input-group  mt-3 mb-3 col-4" style={{ width: "50%" }}>
// <input type="text" className="form-control" aria-label="Text input with dropdown button"  placeholder="Sort"/>
//   <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
//   <ul className="dropdown-menu dropdown-menu-end">
//     <li><a className="dropdown-item" href="#">Action</a></li>
//     <li><a className="dropdown-item" href="#">Another action</a></li>
//     <li><a className="dropdown-item" href="#">Something else here</a></li>
//     <li><hr className="dropdown-divider"/></li>
//     <li><a className="dropdown-item" href="#">Separated link</a></li>
//   </ul>
// </div>
// </div>

// </div>
//   );
// };

// export default FiltersAndSearch;



import React, { useState } from "react";

const FiltersAndSearch = ({ onSearch, onFilter, onSort }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [sort, setSort] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilter1Change = (e) => {
    setFilter1(e.target.value);
    onFilter("filter1", e.target.value);
  };

  const handleFilter2Change = (e) => {
    setFilter2(e.target.value);
    onFilter("filter2", e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div>
      <div className="Search mt-3 col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-secondary col-2"
          type="button"
          id="button-addon2"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB3klEQVRIS+2WbU3EQBCG7xyAg+IAFFAUAA6KAkABoABQwDkABxQFgALOATiA9wmzyaS3Xy1p7g+bTNq0u/PMvDO77XKxpbHcEndRC95RgPuyRsb9l2wt66cGXgIDuZJ1Boxx7vTwcmwAOXArZw+WZckvCpzJnkoTw/sU+FoTzl2WSPpijpGYoBrZoezEwW50z9riiIFx+mwryQRnyJkanV7cuiBPLcAsfAimpkBpJKBHsrdi+L8N92Fw1u3Z+uTSIZjIL2w2DZPLdOgUyR/t4UpXal4FJupXWWNSIdnYAZgAyHq3FtxqYqjt2GwDw2dNmfoU3EvdaRLbh1HVIBGnqPZpz7PBezC1pcYMZEKuKePbFmW3lgd7mQ60uKabh4GxG+iTomop8NQa+3KxpdYpyTzY78VeC2iOscN3dXYvD/cxzUXURakiEflSFT8csZMr7GWai1on5XJwfwZMOrnw1cr8WU29VxnNme+/YsVs8ZX6Ovmjk3mA32W9KdDoih3LukhQ2cMjBw6Z0yzIWBrIS3DhnGd+9ckVcw6U7GNZMT8A702JVtdQpiy89Ovjg6FrCQSJAfYGG55wVfAx4JLc/n0RPheYIDx8o9PnBAc4nb/xFzo3OFmef/CYzv3T3B9ZN2QfCD5GBgAAAABJRU5ErkJggg=="/>
        </button>
      </div>

      <div className="filters row d-flex">
        <h2 className="d-flex justify-content-start mt-3">Filters</h2>
        <div className="filter_1 input-group mt-3 mb-3 col-4" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Filter 1"
            value={filter1}
            onChange={handleFilter1Change}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div className="filter_2 input-group mt-3 mb-3 col-4" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Filter 2"
            value={filter2}
            onChange={handleFilter2Change}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>

      <div className="sort row d-flex">
        <h2 className="d-flex justify-content-start mt-3">Sort</h2>
        <div className="sort_1 input-group mt-3 mb-3 col-4" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Sort"
            value={sort}
            onChange={handleSortChange}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FiltersAndSearch;
