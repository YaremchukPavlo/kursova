import React, { useEffect, useState } from "react";
// import HeaderLite from "../../components/header_lite";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const id = localStorage.getItem('id');
      try {
        const response = await fetch(`/users/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Додайте токен аутентифікації, якщо використовуєте аутентифікацію
          },
        });

        if (response.ok) {
          const userProfileData = await response.json();
          console.log(userProfileData);
          setUserProfile(userProfileData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
          console.error("Помилка при отриманні даних профілю");
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error("Помилка при відправці запиту", error);
      }
    };

    fetchUserProfile();
  }, []); // Пустий масив залежностей означає, що ефект викликається лише після монтажу компонента

  return (
    <div>
      {/* <HeaderLite /> */}
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
          <p>Error loading user profile</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
