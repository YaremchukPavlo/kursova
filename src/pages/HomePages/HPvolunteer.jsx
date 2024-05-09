// import React from "react";
// import "../../App.css";
// import Header from "../../components/Header";
// import News from "../News/News";
// import CarOffers from "../cars/CarOffers";
// import Requests from "../requests/Requests";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CustomSlider from "../../components/CustomSlider";
// import iimg1 from "./image1.jpg";
// import iimg2 from "./image2.jpg";
// import iimg3 from "./image2.jpg";

// function HPvolunteer() {
//   const userType = localStorage.getItem("userType");

//   const sliderItems = [
//     { id: 1, image: iimg1, caption: "Слайд 1" },
//     { id: 2, image: iimg2, caption: "Слайд 2" },
//     { id: 3, image: iimg3, caption: "Слайд 3" },
//   ];

//   return (
//     <div>
//       <div className="App">
//         <Header />
//         <div className="home-page row d-flex justify-content-center">
//           <CustomSlider items={sliderItems} />
//           <div
//             className="col-9 justify-content-center mt-5"
//             style={{ backgroundColor: "green" }}
//           >

//             <div class="input-group mt-3">
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="Recipient's username"
//                 aria-label="Recipient's username"
//                 aria-describedby="button-addon2"
//               />
//               <button
//                 class="btn btn-outline-secondary"
//                 type="button"
//                 id="button-addon2"
//               >
// <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB3klEQVRIS+2WbU3EQBCG7xyAg+IAFFAUAA6KAkABoABQwDkABxQFgALOATiA9wmzyaS3Xy1p7g+bTNq0u/PMvDO77XKxpbHcEndRC95RgPuyRsb9l2wt66cGXgIDuZJ1Boxx7vTwcmwAOXArZw+WZckvCpzJnkoTw/sU+FoTzl2WSPpijpGYoBrZoezEwW50z9riiIFx+mwryQRnyJkanV7cuiBPLcAsfAimpkBpJKBHsrdi+L8N92Fw1u3Z+uTSIZjIL2w2DZPLdOgUyR/t4UpXal4FJupXWWNSIdnYAZgAyHq3FtxqYqjt2GwDw2dNmfoU3EvdaRLbh1HVIBGnqPZpz7PBezC1pcYMZEKuKePbFmW3lgd7mQ60uKabh4GxG+iTomop8NQa+3KxpdYpyTzY78VeC2iOscN3dXYvD/cxzUXURakiEflSFT8csZMr7GWai1on5XJwfwZMOrnw1cr8WU29VxnNme+/YsVs8ZX6Ovmjk3mA32W9KdDoih3LukhQ2cMjBw6Z0yzIWBrIS3DhnGd+9ckVcw6U7GNZMT8A702JVtdQpiy89Ovjg6FrCQSJAfYGG55wVfAx4JLc/n0RPheYIDx8o9PnBAc4nb/xFzo3OFmef/CYzv3T3B9ZN2QfCD5GBgAAAABJRU5ErkJggg=="/>              </button>
//             </div>

//             <CarOffers />
//             <Requests />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HPvolunteer;
import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import CarOffers from "../cars/CarOffers";
import Requests from "../requests/Requests";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../../components/CustomSlider";
import iimg1 from "./image1.jpg";
import iimg2 from "./image2.jpg";
import iimg3 from "./image2.jpg";
import FiltersAndSearch from "../../components/SortFiltersSearch"; // Додано імпорт нового файлу

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
        <div className="home-page row d-flex justify-content-center">
          <CustomSlider items={sliderItems} />
          <div className="card col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
          <FiltersAndSearch /> 
          <CarOffers />
          <Requests />
          </div>
        </div>
      </div>
      </div>
  );
}

export default HPvolunteer;
