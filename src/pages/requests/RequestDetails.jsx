import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLite from "../../components/header_lite";
import axios from "axios";

function RequestDetails() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
      <HeaderLite />
      <div
        className="car-det-card form_container p-5 rounded "
        style={{ backgroundColor: "rgb(225, 214, 155)", height: "675px" }}
      >
        <form className="col-10 d-flex ">
          <div className="col-8 d-flex flex-column align-items-start">
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
              Date: <em>{request.created_at}</em>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestDetails;
