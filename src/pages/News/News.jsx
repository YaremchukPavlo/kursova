import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  const news = [
    {
      id: 1,
      title: "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
      content: "Лорем іпсум текст для першої новини.",
      image: './News-images/1.jpg',
    },
    {
      id: 2,
      title: "Новина 2",
      content: "Лорем іпсум текст для другої новини.",
      image: 'images/image2.jpg',
    },
    {
      id: 3,
      title: "Новина 3",
      content: "Лорем іпсум текст для третьої новини.",
      image: 'images/image3.jpg',
    },
  ];

  return (
    <div className='row d-flex justify-content-center m-1'>
      <h2 className='text-center'>Новини</h2>
      {news.map((item, index) => (
        <div key={index} className="news-item col-10 card card-body p-3 m-2">
          <h5>{item.title}</h5>
          <img src={item.image[index]} alt={`Зображення для ${item.title}`} className="img-fluid" />
          <Link to={`/news-details/${item.id}`} className='d-flex justify-content-end'>
            <p>Читати</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;
