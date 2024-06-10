import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import CarOffers from "../cars/CarOffers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../../components/CustomSlider";
import iimg1 from "./image1.jpg";
import iimg2 from "./image2.jpg";
import iimg3 from "./image2.jpg";
import backgroundImage from "./back.jpeg";

function HPZSU() {
  const userType = localStorage.getItem("userType");
  const siteStatistics = {
    totalUsers: 1000,
    totalCarsListed: 500,
    totalRequests: 200,
  };
  const sliderItems = [
    { id: 1, image: iimg1, caption: "Слайд 1" },
    { id: 2, image: iimg2, caption: "Слайд 2" },
    { id: 3, image: iimg3, caption: "Слайд 3" },
  ];
  return (
    <div className="App">
      <Header />
      <div className="home-page  row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <CustomSlider items={sliderItems} />
          <div className="card col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
          <CarOffers />
          <div className="card card-body site-statistics mb-3">
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
