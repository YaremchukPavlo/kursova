import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading car details</div>;
  }

  return (
    <div>
      <h2>Деталі автомобіля</h2>
      <p>Марка: {car.mark}</p>
      <p>Модель: {car.model}</p>
      <p>Рік випуску: {car.year}</p>
      <p>Об'єм двигуна: {car.engineCapacity}</p>
      <p>Тип кузова: {car.bodyType}</p>
      <p>Вага: {car.weight}</p>
      <p>Тип пального: {car.fuelType}</p>
      <p>Тип автомобіля: {car.carType}</p>
      <p>Тип приводу: {car.driveType}</p>
    </div>
  );
}

export default CarDetails;
