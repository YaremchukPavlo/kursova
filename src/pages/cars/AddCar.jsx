import React, { useState } from 'react';
// import './addcar.css'
import '../../components/Auth-Reg-Form/form/formStyle.css';


function CarForm() {
  const [formData, setFormData] = useState({
    mark: '',
    model: '',
    year: '',
    engineCapacity: '',
    bodyType: '',
    weight: '',
    fuelType: '',
    carType: '',
    driveType: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [image, setImage] = useState(null); // State to store the selected image file

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('mark', formData.mark);
      formDataWithImage.append('model', formData.model);
      formDataWithImage.append('year', formData.year);
      formDataWithImage.append('engineCapacity', formData.engineCapacity);
      formDataWithImage.append('bodyType', formData.bodyType);
      formDataWithImage.append('weight', formData.weight);
      formDataWithImage.append('fuelType', formData.fuelType);
      formDataWithImage.append('carType', formData.carType);
      formDataWithImage.append('driveType', formData.driveType);

      if (image) {
        formDataWithImage.append('image', image);
      }

      const response = await fetch('/cars/add-car', {
        method: 'POST',
        body: formDataWithImage,
      });

      if (response.ok) {
        setFormData({
          mark: '',
          model: '',
          year: '',
          engineCapacity: '',
          bodyType: '',
          weight: '',
          fuelType: '',
          carType: '',
          driveType: '',
        });
        setImage(null);

        setSuccessMessage('Автомобіль додано успішно!');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Помилка при додаванні автомобіля:', error);
    }
  }

  return (
    <div className='login-container template d-flex justify-content-center align-items-center px-1500'>

    <div className="login-card-car form_containerQ p-5 rounded">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      {successMessage && <p className="text-success mt-2">{successMessage}</p>}
      <h2 className="text-center mb-4">Додати автомобіль</h2>
        <div className="mb-3">
          <label htmlFor="mark" className="form-label">Марка:</label>
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
          <label htmlFor="model" className="form-label">Модель:</label>
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
          <label htmlFor="year" className="form-label">Рік випуску:</label>
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
          <label htmlFor="engineCapacity" className="form-label">Об'єм двигуна:</label>
          <input
            type="number"
            className="form-control"
            id="engineCapacity"
            name="engineCapacity"
            value={formData.engineCapacity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bodyType" className="form-label">Тип кузова:</label>
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
          <label htmlFor="weight" className="form-label">Вага:</label>
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
          <label htmlFor="fuelType" className="form-label">Тип пального:</label>
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
          <label htmlFor="carType" className="form-label">Тип автомобіля:</label>
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
          <label htmlFor="driveType" className="form-label">Тип приводу:</label>
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
          <label htmlFor="image" className="form-label">Зображення:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Додати автомобіль</button>
      </form>
    </div>
            </div>
  );
}

export default CarForm;