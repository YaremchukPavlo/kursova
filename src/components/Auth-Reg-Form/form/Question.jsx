import React from 'react';
import { Link } from 'react-router-dom';
import './formStyle.css';

function Signup() {
  
  return (
    <div className="login-container template d-flex justify-content-center align-items-center vh-100 ">
      <div className="login-card form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center text-uppercase">You register as a volunteer or military ?</h3>
          <p className="text-end mt-2">
            <Link to="/signup-military" className="ms-2">Military</Link>
            <Link to="/sіgnup-volunteer" className="ms-2">Volunteer</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;