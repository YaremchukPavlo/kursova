import React from "react";
import "../../App.css";
import HPgues from "./HPgues";
import HPZU from "./HPZSU";
import HPvolunteer from "./HPvolunteer";

function HomePage() {
  const userType = localStorage.getItem("userType");
  const isAuthenticated = userType !== null;
  return (
    <div>
      {isAuthenticated ? (
        <>
          {userType === "volunteer" && <HPvolunteer />}
          {userType === "ZSU" && <HPZU />}
        </>
      ) : (
        <HPgues />
      )}
    </div>
  );
}

export default HomePage;
