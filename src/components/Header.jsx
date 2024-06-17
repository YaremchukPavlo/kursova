import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  const userEmail = localStorage.getItem("email");
  const userType = localStorage.getItem("userType");

  const handleProfileClick = () => {
    if (userEmail && userType) {
      window.location.href = "/user-profile";
    } else {
      window.location.href = "/login";
    }
  };
  const isAuthenticated = userType !== null;
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
      <a className="m-0" href="/" style={{color: "white", textDecoration: "none"}} >Military Car Helper</a>
        <div className="header-buttons align-items-center">
        <button className="col-8 align-items-center">
              <Link to="/news" className="link1">
                News
              </Link>
            </button>
          {userType === "volunteer" && (
            <button className="col-8 align-items-center">
              <Link to="/add-car" className="link1">
                Add Car
              </Link>
            </button>
          )}
          <Link to={userEmail ? "/user-profile" : "/login"} className="link1">
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
