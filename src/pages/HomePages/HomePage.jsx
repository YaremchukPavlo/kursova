import React from 'react';
import '../../App.css'
import Header from '../../components/Header'; // Ваш компонент Header
import News from '../News/News'; // Новий компонент News
import CarOffers from '../cars/CarOffers'; // Новий компонент CarOffers
import Requests from '../requests/Requests';
import HPgues from './HPgues'
import HPZU from './HPZSU'
import HPvolunteer from './HPvolunteer'


function HomePage() {
  const userType = localStorage.getItem('userType');
  const isAuthenticated = userType !== null;
  return (
    <div>
  {isAuthenticated ? (
    <>
      {userType === 'volunteer' && <HPvolunteer />}
      {userType === 'ZSU' && <HPZU />}
    </>
  ) : (
    <HPgues />
  )}
</div>
  );
}

export default HomePage;
