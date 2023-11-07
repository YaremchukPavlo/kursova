import React, { useState } from 'react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Відправка даних на сервер і збереження автомобіля в базу даних
    try {
      // Отримання даних з форми і відправка їх на сервер
      const response = await fetch('/cars/add-car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      //   // Очистка полів форми після успішного додавання
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

        // Встановлення повідомлення про успішне додавання
        setSuccessMessage('Автомобіль додано успішно!');

        // Закриття повідомлення після 3 секунд
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Помилка при додаванні автомобіля:', error);
    }
  };
  
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Додати автомобіль</h2>
      {successMessage && <p className="text-success mt-2">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Додати автомобіль</button>
      </form>
    </div>
  );
}

export default CarForm;
