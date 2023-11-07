import './App.css';
import Login from './components/Auth-Reg-Form/form/Login';
import Signup from './components/Auth-Reg-Form/form/Signup';
import Password from './components/Auth-Reg-Form/form/password';
import HomePage from './pages/HomePage';
import Question from "./components/Auth-Reg-Form/form/Question";
import SignupMilitary from './components/Auth-Reg-Form/form/Signup-military';
import SignupVolunteer from './components/Auth-Reg-Form/form/Signup-volunteer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarForm from './pages/AddCar';
import CarDetailsPage from './pages/CarDetailsPage';
import RequestDetails from './pages/RequestDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/add-car' element={<CarForm />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signup-military' element={<SignupMilitary/>}/>
          <Route path='/sіgnup-volunteer' element={<SignupVolunteer/>}/>
          <Route path='/reset-password' element={<Password/>}/>
          <Route path='/car-details/:id' element={<CarDetailsPage/>}/>
          <Route path='/req-details/:id' element={<RequestDetails/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
