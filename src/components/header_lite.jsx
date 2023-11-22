import React from "react";
import "../App.css";
import Login from "../components/Auth-Reg-Form/form/Login";
import { Link } from "react-router-dom";

function HeaderLite() {
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0">Military Car Helper</p>
      </div>
    </header>
  );
}
export default HeaderLite;
