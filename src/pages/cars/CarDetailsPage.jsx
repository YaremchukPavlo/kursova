import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLite from "../../components/header_lite";
import "./CarDet.css";
import RequestModal from "../requests/RequestModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

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
      <HeaderLite />
      <div
        className="car-det-card form_container p-5 rounded"
        style={{ backgroundColor: "rgb(225, 214, 155)", height: "1400px" }}
      >
        <form className="col-10 d-flex">
          <div className="col-4 d-flex flex-column align-items-start">
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
            <div className="col-5 d-grid mt-2 align-self-stretch">
              <button
                className="btn btn-primary col-12 m-2"
                type="button"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={() => setShowModal(true)}
              >
                Send request
              </button>
              {showEditButton && (
                <button
                  className="btn btn-primary m-2 col-12"
                  style={{ backgroundColor: "rgb(103, 86, 70)" }}
                  onClick={() => console.log("Edit button clicked")}
                >
                  Edit
                </button>
              )}
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
            {car.image && (
              <img
                className="card-img-top1"
                src={`https://diplom-l4nh.onrender.com/uploads/cars/${car.image}`}
                alt="Car"
                style={{ maxWidth: "800px", height: "auto" }}
              />
            )}
          </div>
        </form>
        <LoadScript googleMapsApiKey={apiKey}>
          <div className="col-10">
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
