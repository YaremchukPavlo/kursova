// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import HeaderLite from "../../components/header_lite";
// import "./CarDet.css";
// import RequestModal from "../requests/RequestModal";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function CarDetails() {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     carModel: "",
//     carMark: "",
//   });
//   const navigate = useNavigate();

//   const handleReturnToMainPage = () => {
//     navigate("/");
//   };
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   const handleSaveRequest = () => {
//     console.log("Request Data:", formData);
//     handleCloseModal();
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       setIsLoading(true);

//       try {
//         const response = await axios.get(`/api/cars/simple/${id}`);
//         if (!response.data) {
//           throw new Error("Response data is empty");
//         }
//         setCar(response.data.simpleCar);
//       } catch (error) {
//         setIsError(true);
//         console.error(error);
//       }

//       setIsLoading(false);
//     };

//     fetchData();
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading....</div>;
//   }

//   if (isError) {
//     return <div>Error loading car details</div>;
//   }

//   return (
//     <div>
//       <HeaderLite />
//       <div
//         className="car-det-card form_container p-5 rounded "
//         style={{ backgroundColor: "rgb(225, 214, 155)", height: "675px" }}
//       >
//         <form className="col-10 d-flex ">
//           <div className="col-4 d-flex flex-column align-items-start">
//             <h2 className="card-title ">Деталі автомобіля</h2>
//             <p className="card-text">
//               Марка: <em>{car.mark}</em>
//             </p>
//             <p className="card-text">
//               Модель: <em>{car.model}</em>
//             </p>
//             <p className="card-text">
//               Рік випуску: <em>{car.year}</em>
//             </p>
//             <p className="card-text">
//               Об'єм двигуна: <em>{car.engineCapacity}</em>
//             </p>
//             <p className="card-text">
//               Тип кузова: <em>{car.bodyType}</em>
//             </p>
//             <p className="card-text">
//               Вага: <em>{car.weight}</em>
//             </p>
//             <p className="card-text">
//               Тип пального: <em>{car.fuel_type}</em>
//             </p>
//             <p className="card-text">
//               Тип автомобіля: <em>{car.car_type}</em>
//             </p>
//             <p className="card-text">
//               Тип приводу: <em>{car.drive_type}</em>
//             </p>
//             <div className="col-5 d-grid mt-2 align-self-stretch">
//               <button
//                 className="btn btn-primary col-12 m-2"
//                 type="button"
//                 style={{ backgroundColor: "rgb(103, 86, 70)" }}
//                 onClick={() => setShowModal(true)}
//               >
//                 Send request
//               </button>
//               <button
//                 className="btn btn-primary m-2 col-12"
//                 style={{ backgroundColor: "rgb(103, 86, 70)" }}
//                 onClick={handleReturnToMainPage}
//               >
//                 Go back
//               </button>
//             </div>
//           </div>
//           <div className="col-6 w-400 justify-content-start">
//             {car.image && (
//               <img
//                 className="card-img-top1"
//                 src={`/uploads/cars/${car.image}`}
//                 alt="Car"
//                 style={{ maxWidth: "800px", height: "auto" }}
//               />
//             )}
//           </div>
//         </form>
//         <RequestModal
//           showModal={showModal}
//           handleCloseModal={handleCloseModal}
//           handleSaveRequest={handleSaveRequest}
//           formData={formData}
//           setFormData={setFormData}
//           carModel={car.model}
//           carMark={car.mark}
//         />
//       </div>
//     </div>
//   );
// }

// export default CarDetails;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLite from "../../components/header_lite";
import "./CarDet.css";
import RequestModal from "../requests/RequestModal";
import { useNavigate } from "react-router-dom";
import carData from "./carData"; // Шлях до вашого файлу із статичними даними

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(carData); // Використовуємо статичні дані
  const [isLoading, setIsLoading] = useState(false); // Змінена на false, оскільки використовуємо статичні дані
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    carModel: "",
    carMark: "",
  });
  const navigate = useNavigate();

  const handleReturnToMainPage = () => {
    navigate("/");
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveRequest = () => {
    console.log("Request Data:", formData);
    handleCloseModal();
  };

  return (
    <div>
      <HeaderLite />
      <div
        className="car-det-card form_container p-5 rounded "
        style={{ backgroundColor: "rgb(225, 214, 155)", height: "675px" }}
      >
        <form className="col-10 d-flex ">
          <div className="col-4 d-flex flex-column align-items-start">
            <h2 className="card-title ">Деталі автомобіля</h2>
            <p className="card-text">
              Марка: <em>{car.mark}</em>
            </p>
            <p className="card-text">
              Модель: <em>{car.model}</em>
            </p>
            <p className="card-text">
              Рік випуску: <em>{car.year}</em>
            </p>
            <p className="card-text">
              Об'єм двигуна: <em>{car.engineCapacity}</em>
            </p>
            <p className="card-text">
              Тип кузова: <em>{car.bodyType}</em>
            </p>
            <p className="card-text">
              Вага: <em>{car.weight}</em>
            </p>
            <p className="card-text">
              Тип пального: <em>{car.fuelType}</em>
            </p>
            <p className="card-text">
              Тип автомобіля: <em>{car.carType}</em>
            </p>
            <p className="card-text">
              Тип приводу: <em>{car.driveType}</em>
            </p>
            <div className="col-5 d-grid mt-2 align-self-stretch">
              <button
                className="btn btn-primary col-12 m-2"
                type="button"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={() => setShowModal(true)}
              >
                Send request
              </button>
              <button
                className="btn btn-primary m-2 col-12"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleReturnToMainPage}
              >
                Go back
              </button>
            </div>
          </div>
          <div className="col-6 w-400 justify-content-start">
            {car.imagePath && (
              <img
                className="card-img-top1"
                src={car.imagePath}
                alt="Car"
                style={{ maxWidth: "800px", height: "auto" }}
              />
            )}
          </div>
        </form>
        <RequestModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleSaveRequest={handleSaveRequest}
          formData={formData}
          setFormData={setFormData}
          carModel={car.model}
          carMark={car.mark}
        />
      </div>
    </div>
  );
}

export default CarDetails;
