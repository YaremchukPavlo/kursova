// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from "../../components/Header";
// import backgroundImage from "../HomePages/back.jpeg";
// import CustomSlider from "../../components/CustomSlider";
// import iimg1 from "../../components/img1.jpg";
// import iimg2 from "../../components/img2.jpg";
// import iimg3 from "../../components/img3.jpg";
// const NewsPage = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.get('/news/list');
//                 console.log(response.data); // log the response data here
//                 setNews(response.data.news);
//             } catch (error) {
//                 console.error('Error fetching news:', error);
//             }
//         };

//         fetchNews();
//     }, []);
//   const sliderItems = [
//     { id: 1, image: iimg1, caption: "Слайд 1" },
//     { id: 2, image: iimg2, caption: "Слайд 2" },
//     { id: 3, image: iimg3, caption: "Слайд 3" },
//   ];

//     return (
//         <div className="App">
//             <Header />
//             <div div className="home-page row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <CustomSlider items={sliderItems} />
// //           <div className="news-grid col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
//             <ul>
//                 {Array.isArray(news) && news.map((item) => (
//                     <li key={item.id}>
                        
//                         <p>{item.content}</p>
//                     </li>
//                 ))}
//             </ul>
//             <button className="btn btn-primary">Read More</button>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default NewsPage;
//=============================================================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import backgroundImage from "../HomePages/back.jpeg";
import "./NewsPage.css"
import Footer from "../../components/Footer";
import img1 from "./NewsImages/1.jpg";
import img2 from "./NewsImages/2.jpg";
import img3 from "./NewsImages/3.png";

const NewsPage = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Відкриття нового парку",
      content: "У центрі міста відкрився новий парк з багатьма атракціями та зонами для відпочинку. Цей парк стане чудовим місцем для відпочинку та розваг для всієї родини.",
      image: img1
    },
    {
      id: 2,
      title: "Концерт класичної музики",
      content: "Цього тижня в нашому місті відбудеться концерт класичної музики. Виступатимуть відомі музиканти з усього світу. Не пропустіть можливість насолодитися чудовою музикою.",
      image: img2
    },
    {
      id: 3,
      title: "Нова виставка в музеї",
      content: "У місцевому музеї відкрилася нова виставка, присвячена історії нашого міста. Ви зможете побачити унікальні експонати та дізнатися багато цікавого про минуле.",
      image: img3
    },
    {
      id: 4,
      title: "Благодійний марафон",
      content: "Цієї суботи відбудеться благодійний марафон. Всі зібрані кошти будуть направлені на допомогу дитячим будинкам. Приєднуйтесь та підтримайте дітей.",
      image: img2
    },
    {
      id: 5,
      title: "Нова спортивна арена",
      content: "У нашому місті відкрилася нова спортивна арена. Вона оснащена найсучаснішим обладнанням та готова приймати змагання найвищого рівня.",
      image: img1
    },
    {
      id: 6,
      title: "Фестиваль вуличної їжі",
      content: "Цього тижня в центрі міста пройде фестиваль вуличної їжі. Ви зможете скуштувати страви з різних куточків світу та насолодитися живою музикою.",
      image: img3
    },
    {
      id: 7,
      title: "Еко-акція з висадки дерев",
      content: "Мешканці міста організували еко-акцію з висадки дерев. Долучитися можуть всі бажаючі. Разом ми зробимо наше місто зеленішим та привабливішим.",
      image: img1
    },
    {
      id: 8,
      title: "Кіно під відкритим небом",
      content: "Цієї п'ятниці в міському парку пройде показ кіно під відкритим небом. Приходьте з родиною та друзями, щоб насолодитися чудовим фільмом у приємній атмосфері.",
      image: img2
    },
    {
      id: 9,
      title: "Виставка художніх робіт",
      content: "У міській галереї відкрилася виставка робіт місцевих художників. Ви зможете побачити картини та скульптури, створені талановитими майстрами.",
      image: img3
    },
    {
      id: 10,
      title: "Лекція про здоровий спосіб життя",
      content: "Цього тижня у міському центрі здоров'я пройде лекція про здоровий спосіб життя. Ви дізнаєтеся багато корисного про правильне харчування та фізичні вправи.",
      image: img2
    }
  ]);

   return (
    <div className="App">
      <Header />
      <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1></h1>
            <div className="row">
              {news.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card news-card">
                    <img src={item.image} alt={item.title} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <Link to={`/news-details/${item.id}`} className="btn btn-primary mt-auto">Читати далі</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default NewsPage;



