import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./formStyle.css";
import { Container, Form, Button, Card } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const result = response.data;
        console.log(result);

        if (result) {
          const userType = result.user.type;
          const userId = result.user.id;

          localStorage.setItem("email", email);
          localStorage.setItem("userType", userType);
          localStorage.setItem("id", userId);

          console.log(userType);

          if (userType === "ZSU") {
            navigate("/");
          } else if (userType === "volunteer") {
            navigate("/");
          } else {
            navigate("/");
          }
        } else {
          console.error("User type not found in the response:", result);
          navigate("/");
        }
      } else {
        console.error("Error response data:", response.data);
        setErrorMessage("An error occurred during login.");
      }
    } catch (error) {
      console.error("Error sending request", error);
      setErrorMessage("An error occurred during login.");
    }
  };

  return (
    <Container
      fluid
      className="login1 d-flex justify-content-center align-items-center vh-100 login-container"
    >
      <Card className="login-card">
        <Card.Body>
          <h3 className="text-center text-uppercase mb-4">Login</h3>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-grid mt-4">
              <Button
                type="submit"
                className="loginbtn"
                style={{ backgroundColor: "rgb(103, 86, 70)" }}
              >
                Login
              </Button>
            </div>
          </Form>

          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

          <div className="text-center mt-3">
            <Link to="/reset-password" className="link1">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/question" className="link1">
              Sign Up
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
