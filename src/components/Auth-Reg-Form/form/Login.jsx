import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SHA256 } from 'crypto-js';
import './formStyle.css';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.warn('result', result);
        navigate('/');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Помилка при відправці запиту', error);
    }
  };
  

  return (
    <Container fluid className='login1 d-flex justify-content-center align-items-center vh-100 login-container'>
      <Card className='login-card'>
        <Card.Body>
          <h3 className='text-center text-uppercase mb-4'>Login</h3>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword' className='mt-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className='d-grid mt-4'>
              <Button  type='submit' className='loginbtn' style={{ backgroundColor: 'rgb(103, 86, 70)' }}>
                Login
              </Button>
            </div>
          </Form>

          {errorMessage && <p className='text-danger mt-3'>{errorMessage}</p>}

          <div className='text-center mt-3'>
            <Link to='/reset-password' className='link1'>Forgot Password?</Link>
          </div>
          <div className='text-center mt-3'>
            Don't have an account? <Link to='/question' className='link1'>Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;