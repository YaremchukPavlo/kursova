
import React, { useEffect, useState } from "react";
import "../../components/Auth-Reg-Form/form/formStyle.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

function CarForm() {
  const [formData, setFormData] = useState({
    mark: "",
    model: "",
    year: "",
    engineCapacity: "",
    bodyType: "",
    weight: "",
    fuelType: "",
    carType: "",
    driveType: "",
    lat: "", 
    lng: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleReturnToMainPage = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMapClick = (e) => {
    setFormData({
      ...formData,
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithImage = new FormData();
      for (const key in formData) {
        formDataWithImage.append(key, formData[key]);
      }

      if (image) {
        formDataWithImage.append("image", image);
      }

      const response = await axios.post("/cars/create", formDataWithImage);

      if (response.status === 201) {
        setFormData({
          mark: "",
          model: "",
          year: "",
          engineCapacity: "",
          bodyType: "",
          weight: "",
          fuelType: "",
          carType: "",
          driveType: "",
          lat: "",
          lng: ""
        });
        setImage(null);

        setSuccessMessage(response.data.message);
        setErrorMessage(""); // Clear error message

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("Помилка при додаванні автомобіля");
      }
    } catch (error) {
      setErrorMessage("Помилка при додаванні автомобіля");
      console.error("Помилка при додаванні автомобіля:", error);
    }
  };

  return (
    <div className="login-container template d-flex justify-content-center align-items-center px-1500">
      <div className="login-card-car form_containerQ p-5 rounded">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="text-center mb-4"> Додати автомобіль</h2>
          <div className="mb-3">
            <label htmlFor="mark" className="form-label">
              Марка:
            </label>
            <input
              type="text"
              className="form-control"
              id="mark"
              name="mark"
              value={formData.mark}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Модель:
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Рік випуску:
            </label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="engineCapacity" className="form-label">
              Об'єм двигуна:
            </label>
            <input
              type="number"
              step={0.2}
              className="form-control"
              id="engineCapacity"
              name="engineCapacity"
              value={formData.engineCapacity}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bodyType" className="form-label">
              Тип кузова:
            </label>
            <input
              type="text"
              className="form-control"
              id="bodyType"
              name="bodyType"
              value={formData.bodyType}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Вага:
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fuelType" className="form-label">
              Тип пального:
            </label>
            <input
              type="text"
              className="form-control"
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carType" className="form-label">
              Тип автомобіля:
            </label>
            <input
              type="text"
              className="form-control"
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="driveType" className="form-label">
              Тип приводу:
            </label>
            <input
              type="text"
              className="form-control"
              id="driveType"
              name="driveType"
              value={formData.driveType}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            
            <input
              type="number"
              className="form-control"
              id="lat"
              name="lat"
              value={formData.lat}
              onChange={handleInputChange}
              readOnly // Make the input read-only
              hidden
            />
          </div>
          <div className="mb-3">

            <input
              type="number"
              className="form-control"
              id="lng"
              name="lng"
              value={formData.lng}
              onChange={handleInputChange}
              readOnly // Make the input read-only
              hidden
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Зображення:
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div style={{ height: '400px', width: '100%', marginBottom: '20px' }}>
            <LoadScript googleMapsApiKey="AIzaSyDcWbZVIM2dhtw4I-tE9ORWQIAEKN11pVA">
              <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{ lat: 48.3794, lng: 31.1656 }} // Center of Ukraine
                zoom={6}
                onClick={handleMapClick}
              >
                {formData.lat && formData.lng && (
                  <Marker position={{ lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) }} />
                )}
              </GoogleMap>
            </LoadScript>
          </div>
          <button type="submit" className="col-4 btn btn-primary">
            Додати автомобіль
          </button>
          <button
                className="col-4 btn btn-primary m-1"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleReturnToMainPage}
              >
                Go back
              </button>
          {successMessage && (
            <p className="text-success mt-2">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-danger mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CarForm;
