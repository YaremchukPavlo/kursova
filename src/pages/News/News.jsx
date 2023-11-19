import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./NewsImages/1.jpg";
import img2 from "./NewsImages/2.jpg";
import img3 from './NewsImages/3.png'
import "./NewsDetail.css";
function News() {
  const news = [
    {
      id: 1,
      title: "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
      image: img1,
    },
    {
      id: 2,
      title: "У Львівській політехніці заявили, що підстав для звільнення Фаріон нема",
      image: img2,
    },
    {
      id: 3,
      title: "Розкрито ще одну унікальну особливість iPhone 2024 року",
      image: img3,
    },
  ];

  return (
    <div className='row d-flex justify-content-center m-1'>
      <h2 className='text-center'>Новини</h2>
      {news.map((item) => (
        <div key={item.id} className="news-item col-10 card card-body p-3 m-2">
          <h5>{item.title}</h5>
          <img src={item.image} alt={`Зображення для ${item.title}`} className="img-fluid" style={{
                  width: "100%",
                  height: "100%",
                }}/>
          <Link to={`/news-details/${item.id}`} className='link d-flex justify-content-end p-2'>
            <p>Читати</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;
