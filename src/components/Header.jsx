import React from "react";
import "../App.css";
import Login from "../components/Auth-Reg-Form/form/Login"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  const userEmail = localStorage.getItem('email');
  const userType = localStorage.getItem('userType');

  const handleProfileClick = () => {
    // Redirect to the profile page if the user is logged in
    if (userEmail && userType) {
      // Update the path based on your route configuration
      // For example, if your profile route is '/profile', use:
      window.location.href = '/user-profile';
    } else {
      // Redirect to the login page if not logged in
      window.location.href = '/login';
    }
  };
  const isAuthenticated = userType !== null;
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0">Military Car Helper</p>
        <div className="header-buttons align-items-center">
        {userType === 'volunteer' && 
          <button className="col-8 align-items-center"><Link to='/add-car' className="link1">Add Car</Link></button>}
            <Link to={(userEmail) ? '/user-profile' : '/login' } className="link1"> 
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
