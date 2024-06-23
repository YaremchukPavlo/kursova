import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultUserPhoto from "./user.jpg";
import "../cars/CarDet.css";
import Header from "../../components/Header";
import backgroundImage from "../HomePages/back.jpeg";
import Footer from "../../components/Footer";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
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
      formData.append("avatar", file);

      const id = localStorage.getItem("id");

      try {
        const response = await axios.patch(`/auth/add-avatar/${id}`, formData);

        if (response.status === 200) {
          setSuccessMessage("Photo successfully uploaded");
          setTimeout(() => {
            window.location.reload();
          }, 500)
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
        const response = await axios.get(`/auth/profile/${id}`);
        console.log(response);
        if (response.status === 200) {
          const userProfileData = response.data.user;
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
      <Header />
      <div
        className="car-det-card form_container p-5 rounded d-flex justify-content-center align-items-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "530px" }}
      >
        <form
          className="col-10 d-flex m-3 justify-content-center"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          {userProfile ? (
            <div className="col-12 d-flex justify-content-center">
              <div
                className="col-9 d-flex m-3 p-3 flex-row justify-content-between"
                style={{
                  backgroundColor: "rgb(172, 164, 119)",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <div className="flex-column d-flex justify-content-start">
                  <h3 className="card-title ">Welcome, {userProfile.name}!</h3>
                  <p className="card-text">Email: {userProfile.email}</p>
                  <p className="card-text">You are: {userProfile.type}</p>
                  <div className="d-grid mt-2">
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
                <div className="d-flex flex-column align-items-center">
                  <div className="user-photo-container">
                    <img
                      className="user-photo rounded-circle vh-200"
                      src={
                        userProfile?.avatar
                          ? `http://192.168.0.103:8040/uploads/users/${userProfile.avatar}`
                          : defaultUserPhoto
                      }
                      alt="User"
                    />
                  </div>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="avatar"
                    className="btn btn-primary mt-2"
                    style={{
                      height: "40px",
                      width: "150px",
                      "&:hover": { backgroundColor: "rgb(103, 86, 70)" },
                    }}
                  >
                    Change Photo
                  </label>
                  {successMessage && (
                    <p className="text-success mt-2">{successMessage}</p>
                  )}
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
      <Footer />
    </div>
  );
}
export default UserProfile;
