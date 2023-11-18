import React from 'react';
import '../App.css';
import Header from '../components/Header'; // Ваш компонент Header
import News from '../pages/News/News'; // Новий компонент News
import CarOffers from '../pages/cars/CarOffers'; // Новий компонент CarOffers
import Requests from '../pages/requests/Requests';

function HomePage() {
    return (

        <div className="App">
          <Header />
            <div className="home-page row d-flex ">
              <div className="col-4 d-flex justify-content-center">
                <News />
              </div>
              <div className="col-8">
                <CarOffers />
                <Requests />
              </div>
            </div>
        </div>
  );
}

export default HomePage;
