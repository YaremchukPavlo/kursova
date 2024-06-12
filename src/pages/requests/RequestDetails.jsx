import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import axios from "axios";
import backgroundImage from "../HomePages/back.jpeg";

function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleReturnToMainPage = () => {
    navigate("/");
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('uk-UA', options);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get(`/help/simple/${id}`);
        if (!response.data) {
          throw new Error("Response data is empty");
        }
        setRequest(response.data.simpleHelpRequest);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleAccept = () => {
    fetch(`/requests/accept-req/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRequest((prevRequest) => ({ ...prevRequest, status: "Accepted" }));
      })
      .catch((error) => {
        console.error("Error accepting request:", error);
      });
  };

  const handleDecline = () => {
    fetch(`/requests/decline-req/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRequest((prevRequest) => ({ ...prevRequest, status: "Declined" }));
      })
      .catch((error) => {
        console.error("Error declining request:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading request details</div>;
  }

  return (
    <div>
      <Header />
      <div
        className="car-det-card form_container rounded d-flex justify-content-center align-items-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "550px" }}
      >
        <form className="col-10 d-flex m-3" style={{ backgroundColor: "grey", borderRadius: '10px' }}>
          <div className="col-6 d-flex m-3 p-3 flex-column align-items-start" style={{ backgroundColor: 'rgb(172, 164, 119)', borderRadius: '10px' }}>
            <h2>Request details</h2>
            <p>
              User: <em>{request.user_email}</em>
            </p>
            <p>
              Car Mark: <em>{request.car_mark}</em>
            </p>
            <p>
              Car Model: <em>{request.car_model}</em>
            </p>
            <p>
              Date: <em>{formatDate(request.created_at)}</em>
            </p>
            <p>
              Status: <em>{request.status}</em>
            </p>
            <div className="col-5 d-grid mt-2 align-self-stretch">
              <button
                className="col-8 btn btn-primary m-1"
                type="button"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="col-8 btn btn-primary m-1"
                type="button"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleDecline}
              >
                Decline
              </button>
              <button
                className="col-8 btn btn-primary m-1"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
                onClick={handleReturnToMainPage}
              >
                Go back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestDetails;
