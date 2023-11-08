import React from 'react';
import { Link } from 'react-router-dom';
import './formStyle.css';

function Signup() {
  
  return (
    <div className="login-container template d-flex justify-content-center align-items-center vh-100 ">
      <div className="login-card form_container p-5 rounded " style={{backgroundColor: 'rgb(225, 214, 155)'}}>
      <form>
  <h3 className="text-center text-uppercase">You register as a volunteer or military ?</h3>
  <div className="car-offer-item mt-2 d-flex justify-content-between">
    <button className="link btn btn-primary m-2" type="submit" style={{ backgroundColor: 'rgb(103, 86, 70)' }}><Link to="/signup-volunteer" className="ms-2" style={{ textDecoration: 'none', color: '#000'}}>Volunteer</Link></button>
    <button className="link btn btn-primary m-2" type="submit" style={{ backgroundColor: 'rgb(103, 86, 70)' }}><Link to="/signup-military" className="ms-2" style={{ textDecoration: 'none', color: '#000' }}>Military</Link></button>
  </div>
</form>

      </div>
    </div>
  );
}

export default Signup;