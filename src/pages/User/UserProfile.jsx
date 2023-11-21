import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultUserPhoto from "./user.jpg";
import "../cars/CarDet.css";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/hp-gues");
  };

  const handleReturnToMainPage = () => {
    navigate("/");
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const id = localStorage.getItem("id");
        const response = await fetch("/users/add-photo", {
          method: "PATCH",
          body: formData,
          headers: {
            id: localStorage.getItem("id"),
          },
        });

        if (response.ok) {
          console.log("Photo successfully uploaded");
          // Додайте код для оновлення шляху фотографії в базі даних або іншої необхідної логіки
        } else {
          console.error("Error uploading photo");
        }
      } catch (error) {
        console.error("Error sending request", error);
      }
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      const id = localStorage.getItem("id");
      try {
        const response = await fetch(`/users/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userProfileData = await response.json();
          setUserProfile(userProfileData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
          console.error("Error loading user profile");
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error("Error sending request", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <div
        className="car-det-card form_container p-5 rounded "
        style={{ backgroundColor: "rgb(225, 214, 155)", height: "800px" }}
      >
        <form className="col-10 ">
          {userProfile ? (
            <div className="d-flex justify-content-between ">
              <div className="col-6 d-flex flex-column align-items-start">
                <h3 className="card-title ">
                  Welcome, {userProfile.firstName}!
                </h3>
                <p className="card-text">Email: {userProfile.email}</p>
                <p className="card-text">You are: {userProfile.type}</p>
                <div className="col-5 d-grid mt-2 align-self-stretch">
                  <button
                    className="btn btn-primary m-2"
                    style={{ backgroundColor: "rgb(103, 86, 70)" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    style={{ backgroundColor: "rgb(103, 86, 70)" }}
                    onClick={handleReturnToMainPage}
                  >
                    Return to Main Page
                  </button>
                </div>
              </div>
              <div
                className="col-8 w-400 d-flex flex-column align-items-center"
                style={{ maxHeight: "400px", maxWidth: "400px" }}
              >
                <div className="user-photo-container">
                  <img
                    className="user-photo rounded-circle vh-200"
                    src={
                      userProfile?.imagePath
                        ? `/${userProfile.imagePath}`
                        : defaultUserPhoto
                    }
                    alt="User"
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "rgb(103, 86, 70)",
                      display: "none",
                    }}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="btn btn-primary"
                    style={{
                      height: "40px",
                      width: "150px",
                      "&:hover": { backgroundColor: "rgb(103, 86, 70)" },
                    }}
                  >
                    Change Photo
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <progress></progress>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
