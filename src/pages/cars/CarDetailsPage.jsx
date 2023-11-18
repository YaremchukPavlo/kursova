import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLite from "../../components/header_lite"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CarDet.css";
import RequestModal from '../requests/RequestModal'

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    carModel: "",
    carMark: "",
  });

  // Інші функції та ефекти залишаються незмінними

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveRequest = () => {
    // Logic for sending the request. formData contains form data
    console.log("Request Data:", formData);
    // Close the modal after saving the request
    handleCloseModal();
  };
  useEffect(() => {
    fetch(`/cars/list/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCar(data.message);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error loading car details</div>;
  }

  return (
    <div>
      <HeaderLite />
        <div className="car-det-card form_container p-5 rounded " style={{ backgroundColor: 'rgb(225, 214, 155)', height: '655px' }}>
          <form className=" d-flex justify-content-between">
            <div className="col-3 d-flex flex-column align-items-start">
            <h2 className="card-title ">Деталі автомобіля</h2>
            <p className="card-text">Марка: {car.mark}</p>
            <p className="card-text">Модель: {car.model}</p>
            <p className="card-text">Рік випуску: {car.year}</p>
            <p className="card-text">Об'єм двигуна: {car.engineCapacity}</p>
            <p className="card-text">Тип кузова: {car.bodyType}</p>
            <p className="card-text">Вага: {car.weight}</p>
            <p className="card-text">Тип пального: {car.fuelType}</p>
            <p className="card-text">Тип автомобіля: {car.carType}</p>
            <p className="card-text">Тип приводу: {car.driveType}</p>
          <div className="col-5 d-grid mt-2 align-self-stretch">
          <button
              className="btn btn-primary"
              type="button"
              style={{ backgroundColor: 'rgb(103, 86, 70)' }}
              onClick={() => setShowModal(true)}
            >
              Open Modal
            </button>
              </div>
            </div>
            <div className="col-6 w-100">
                {car.imagePath && (
                  <img className="card-img-top" src={`/${car.imagePath}`} alt="Car" style={{ maxWidth: '65%', height: 'auto' }} />
                )}
            </div>
            
          </form>
          <RequestModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSaveRequest={handleSaveRequest}
        formData={formData}
        setFormData={setFormData}
        carModel={car.model} // передаємо дані моделі
        carMark={car.mark}  // передаємо дані марки
      />
        </div>
      </div>
  );
  
              }
    
export default CarDetails;