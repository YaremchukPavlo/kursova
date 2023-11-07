import React from "react";
import "../App.css";
import Login from "../components/Auth-Reg-Form/form/Login"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0">Military Car Helper</p>
        <div className="header-buttons">
          <button className="m-1">Requests</button>
          <input type="text" />
          <button ><Link to='/add-car' className="link1">ADDDD</Link></button>
          <Link
            to='/login'
            className="btn  buton-acc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
