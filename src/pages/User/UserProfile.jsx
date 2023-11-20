// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import defaultUserPhoto from "./user.jpg";
// import "./user.css";
// function UserProfile() {
//   const [userProfile, setUserProfile] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   }

//   const handleReturnToMainPage = () => {
//     navigate('/');
//   }
//   const handlePhotoChange = () => {
//     // Додайте обробник для зміни фотографії користувача
//     console.log("Change photo logic");
//   };
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const id = localStorage.getItem('id');
//       try {
//         const response = await fetch(`/users/profile/${id}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
        
// console.log(response);

//         if (response.ok) {
//           const userProfileData = await response.json();
//           console.log(userProfileData);
//           setUserProfile(userProfileData);
//           setIsLoading(false);
//           setIsError(false);
//         } else {
//           setIsLoading(false);
//           setIsError(true);
//           console.error("Помилка при отриманні даних профілю");
//         }
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//         console.error("Помилка при відправці запиту", error);
//       }
//     };

//     fetchUserProfile();
//   }, []); 

//   return (
//     <div className="all-prof">
//       <div className="profile-container">
//         {userProfile ? (
//           <div>
//             <h3 className="text-center text-uppercase">
//               Welcome, {userProfile.firstName}!
//             </h3>
//             <p>Email: {userProfile.email}</p>
//             <button onClick={handleLogout}>Logout</button>
//             <button onClick={handleReturnToMainPage}>Return to Main Page</button>
//           </div>
//         ) : (
//           <p>Error loading user profile</p>
//         )}
//       </div>
//       <div className="user-photo-container">
//             <img
//               className="user-photo rounded-circle"
//               src={defaultUserPhoto}
//               alt="User"
//             />
//             <button className="btn btn-primary" onClick={handlePhotoChange}>
//               Change Photo
//             </button>
//           </div>
//     </div>
//   );
// }

// export default UserProfile;
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

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Ви можете використовувати FormData для відправлення файлу на сервер
      const formData = new FormData();
      formData.append('photo', file);

      // Тут можна додати логіку відправки файла на сервер
      console.log("Selected File:", file);
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
          src={defaultUserPhoto}
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
