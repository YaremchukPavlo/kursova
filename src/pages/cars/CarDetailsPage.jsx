import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./CarDet.css";
import RequestModal from "../requests/RequestModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import staticImage from "./Static.jpg";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import backgroundImage from "../HomePages/back.jpeg";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const apiKey = 'AIzaSyDcWbZVIM2dhtw4I-tE9ORWQIAEKN11pVA';
  const [formData, setFormData] = useState({

    
    email: "",
    carModel: "",
    carMark: "",
  });
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userId")); // get userId from local storage
  const [showEditButton, setShowEditButton] = useState(false); // flag to show/hide edit button

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

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get(`/cars/simple/${id}`);
        if (!response.data) {
          throw new Error("Response data is empty");
        }
        setCar(response.data.simpleCar);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (userId && car && userId === car.userId) {
      setShowEditButton(true);
    } else {
      setShowEditButton(false);
    }
  }, [userId, car]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error loading car details</div>;
  }

  return (
    <div>
      <Header />
      <div
        className="car-det-card form_container rounded d-flex justify-content-center align-items-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "1200px" }}
      >
        <form className=" col-10 d-flex m-3" style={{ backgroundColor: "grey", borderRadius: '10px' }}>
          <div className="col-6 d-flex m-3 p-3 flex-column align-items-start" style={{ backgroundColor: 'rgb(172, 164, 119)', borderRadius: '10px' }}>
            <h2 className="card-title">Деталі автомобіля</h2>
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
              Об'єм двигуна: <em>{car.engine_capacity}</em>
            </p>
            <p className="card-text">
              Тип кузова: <em>{car.body_type}</em>
            </p>
            <p className="card-text">
              Вага: <em>{car.weight}</em>
            </p>
            <p className="card-text">
              Тип пального: <em>{car.fuel_type}</em>
            </p>
            <p className="card-text">
              Тип автомобіля: <em>{car.car_type}</em>
            </p>
            <p className="card-text">
              Тип приводу: <em>{car.drive_type}</em>
            </p>
            <p className="card-text">
              Широта: <em>{car.lat}</em>
            </p>
            <p className="card-text">
              Довгота: <em>{car.lng}</em>
            </p>
            <div className="mt-2 col-12 d-flex justify-content-center">


              <button
                className="btn btn-primary m-3 "
                type="button"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={() => setShowModal(true)}
              >
                Send request
              </button>
              {showEditButton && (
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "rgb(103, 86, 70)" }}
                  onClick={() => console.log("Edit button clicked")}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-primary m-3 "
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleReturnToMainPage}
              >
                Go back
              </button>

            </div>
          </div>




          <div className="col-5 justify-content-center mt-3" style={{ borderRadius: '10px' }}>
            {/* {car.image && (
              <img
                className="card-img-top1"
                src={`https://diplom-l4nh.onrender.com/uploads/cars/${car.image}`}
                alt="Car"
                style={{ maxWidth: "800px", height: "auto" }}
              />
            )} */}
            {car.image && (
              <img
                src={staticImage}
                alt={car.mark}
                style={{ maxWidth: "100%", borderRadius: '10px' }}
                className="img-fluid"
              />
            )}
            {!car.image && (
              <img
                src={staticImage}
                alt="Static"
                style={{ maxWidth: "100%", borderRadius: '10px' }}
                className="img-fluid"
              />
            )}
          </div>

        </form>
        <LoadScript googleMapsApiKey={apiKey} style={{ borderRadius: '10px', backgroundColor: "blue" }}>
          <div className="col-10" style={{ borderRadius: '10px', backgroundColor: "blue" }}>
            <GoogleMap
              center={{ lat: car.lat, lng: car.lng }}
              zoom={15}
              mapContainerStyle={{ height: '600px', width: '100%' }}
            >
              <Marker position={{ lat: car.lat, lng: car.lng }} />
            </GoogleMap>
          </div>
        </LoadScript>
        <RequestModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleSaveRequest={handleSaveRequest}
          formData={formData}
          setFormData={setFormData}
          carModel={car.model}
          carMark={car.mark}
        />
        <input
          type="hidden"
          value={userId}
          name="userId"
        />
      </div>
    </div>
  );
}

export default CarDetails;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../../components/Header";
// import "./CarDet.css";
// import RequestModal from "../requests/RequestModal";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import staticImage from "./Static.jpg";
// import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
// import backgroundImage from "../HomePages/back.jpeg";

// function CarDetails() {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
//   const [formData, setFormData] = useState({
//     email: "",
//     carModel: "",
//     carMark: "",
//   });
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState(localStorage.getItem("userId"));
//   const [showEditButton, setShowEditButton] = useState(false);

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
//       try {
//         const response = await axios.get(`/cars/${id}`);
//         setCar(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//         setIsError(true);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError || !car) {
//     return <div>Error loading car details.</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <div
//         className="car-details-container"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           minHeight: "100vh",
//         }}
//       >
//         <div className="car-details-content">
//           <div className="car-image-container">
//             <img
//               src={car.image ? car.image : staticImage}
//               alt={car.model}
//               className="car-image"
//             />
//           </div>
//           <h2>{car.model}</h2>
//           <p>Марка: {car.mark}</p>
//           <p>Рік випуску: {car.year}</p>
//           <p>Об'єм двигуна: {car.engineCapacity}</p>
//           <p>Тип кузова: {car.bodyType}</p>
//           <p>Вага: {car.weight}</p>
//           <p>Тип пального: {car.fuelType}</p>
//           <p>Тип автомобіля: {car.carType}</p>
//           <p>Тип приводу: {car.driveType}</p>
//           <div style={{ height: '400px', width: '100%' }}>
//             <LoadScript googleMapsApiKey={apiKey}>
//               <GoogleMap
//                 mapContainerStyle={{ height: '100%', width: '100%' }}
//                 center={{ lat: parseFloat(car.lat), lng: parseFloat(car.lng) }}
//                 zoom={10}
//               >
//                 <Marker position={{ lat: parseFloat(car.lat), lng: parseFloat(car.lng) }} />
//               </GoogleMap>
//             </LoadScript>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarDetails;
