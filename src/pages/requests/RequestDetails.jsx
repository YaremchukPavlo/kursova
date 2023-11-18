import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RequestDetails() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`/requests/one/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRequest(data.message);
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
    return <div>Error loading request details</div>;
  }

  return (
    <div>
      <h2>Деталі Запиту</h2>
      <p>User: {request.userEmail}</p>
      <p>Car Marc: {request.carMark}</p>
      <p>Car Model: {request.carModel}</p>
      <p>Date: {request.dateTime}</p>
      <p>Status: {request.status}</p>
    </div>
  );
}

export default RequestDetails;
