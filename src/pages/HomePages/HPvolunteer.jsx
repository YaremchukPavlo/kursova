import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import CarOffers from "../cars/CarOffers";
import Requests from "../requests/Requests";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../../components/CustomSlider";
import iimg1 from "../../components/img1.jpg";
import iimg2 from "../../components/img2.jpg";
import iimg3 from "../../components/img3.jpg";
import backgroundImage from "./back.jpeg";
import Footer from "../../components/Footer"

function HPvolunteer() {
  const userType = localStorage.getItem("userType");

  const sliderItems = [
    { id: 1, image: iimg1, caption: "Слайд 1" },
    { id: 2, image: iimg2, caption: "Слайд 2" },
    { id: 3, image: iimg3, caption: "Слайд 3" },
  ];

  return (
    <div>
      <div className="App">
        <Header />
        <div className="home-page row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <CustomSlider items={sliderItems} />
          <div className="card col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
          <CarOffers />
          <Requests />
          </div>
        </div>
        <Footer/>
      </div>
      </div>
  );
}

export default HPvolunteer;
