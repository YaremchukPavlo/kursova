import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./formStyle.css";

function SignupMilitary() {
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    email: "",
    password: "",
    confirm_password: "",
    type: "ZSU",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/registration", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.warn("result", response.data);
      } else {
        console.error("Помилка при відправці даних");
      }
    } catch (error) {
      console.error("Помилка при відправці запиту", error);
    }
  };

  return (
    <div className="login-container template d-flex justify-content-center align-items-center vh-100">
      <div
        className="login-card form_containerQ p-5 rounded"
        style={{ backgroundColor: "rgb(225, 214, 155)" }}
      >
        <form onSubmit={handleFormSubmit}>
          <h3 className="text-center text-uppercase">Sign Up As Military</h3>
          <div className="mb-2">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="second_name">Second name</label>
            <input
              type="text"
              name="second_name"
              value={formData.second_name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="d-grid mt-2">
            <button
              className="link1 btn btn-primary"
              type="submit"
              style={{ backgroundColor: "rgb(103, 86, 70)" }}
            >
              Register
            </button>
          </div>
          <p className="text-end mt-2">
            Already Registered?
            <Link to="/login" className="ms-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupMilitary;