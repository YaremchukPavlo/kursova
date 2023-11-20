import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultUserPhoto from "./user.jpg";
import "./user.css";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  const handleReturnToMainPage = () => {
    navigate('/');
  }

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const id = localStorage.getItem('id');
        const response = await fetch('/users/add-photo', {
          method: 'PATCH',
          body: formData,
          headers: {
            'id': localStorage.getItem('id'),
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
      const id = localStorage.getItem('id');
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
    <div className="all-prof">
      <div className="profile-container">
        {userProfile ? (
          <div>
            <h3 className="text-center text-uppercase">
              Welcome, {userProfile.firstName}!
            </h3>
            <p>Email: {userProfile.email}</p>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleReturnToMainPage}>Return to Main Page</button>
          </div>
        ) : (
          <p>Error loading user profile</p>
        )}
      </div>

      <div className="user-photo-container">
        <img
          className="user-photo rounded-circle"
          src={userProfile?.imagePath ? `/${userProfile.imagePath}` : defaultUserPhoto}
          alt="User"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="btn btn-primary">
          Change Photo
        </label>
      </div>
    </div>
  );
}

export default UserProfile;

