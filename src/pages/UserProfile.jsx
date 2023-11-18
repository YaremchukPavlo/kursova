import React, { useState, useEffect } from "react";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Отримати дані профілю користувача з сервера при завантаженні компонента
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Додайте токен аутентифікації, якщо використовуєте аутентифікацію
          },
        });

        if (response.ok) {
          const userProfileData = await response.json();
          setUserProfile(userProfileData);
        } else {
          console.error("Помилка при отриманні даних профілю");
        }
      } catch (error) {
        console.error("Помилка при відправці запиту", error);
      }
    };

    fetchUserProfile();
  }, []); // Пустий масив залежностей означає, що ефект викликається лише після монтажу компонента

  return (
    <div className="profile-container">
      {userProfile ? (
        <div>
          <h3 className="text-center text-uppercase">
            Welcome, {userProfile.firstName}!
          </h3>
          <p>Email: {userProfile.email}</p>
          {/* Додайте інші поля профілю, які вам потрібні */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default UserProfile;
