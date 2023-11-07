import React from 'react';

function News() {
  const news = [
    "Новина 1",
    "Новина 2",
    "Новина 3",
    // Додайте більше новин за потребою
  ];

  return (
      // <div className="news">
        <div className='rer '>
        <h2 className='text-center'>Новини</h2>
          {news.map((item, index) => (
          <div key={index} className="news-item col-10 card card-body p-3 m-3">
            {item}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem labore repudiandae molestiae est, iure quasi ipsa laudantium delectus dolorem dolor illo quos asperiores doloremque. Laudantium adipisci minus veritatis tempore?</p>
            <p>Читати</p>
          </div>
        ))}
        </div>
        
      // </div>
  );
}

export default News;
