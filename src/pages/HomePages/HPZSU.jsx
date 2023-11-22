import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import News from "../News/News";
import CarOffers from "../cars/CarOffers";

function HPZSU() {
  const userType = localStorage.getItem("userType");
  const siteStatistics = {
    totalUsers: 1000,
    totalCarsListed: 500,
    totalRequests: 200,
  };

  return (
    <div className="App">
      <Header />
      <div className="home-page row d-flex ">
        <div className="col-4 d-flex justify-content-center">
          <News />
        </div>
        <div className="col-8">
          <CarOffers />
          <div className="card card-body site-statistics m-3">
            <h2 className="justify-content-center">Site Statistics</h2>
            <p>Total Users: {siteStatistics.totalUsers}</p>
            <p>Total Cars Listed: {siteStatistics.totalCarsListed}</p>
            <p>Total Requests: {siteStatistics.totalRequests}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HPZSU;
