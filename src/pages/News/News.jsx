// import React, { useEffect } from "react";
// import axios from "axios";
// import "../../App.css";
// import Header from "../../components/Header";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CustomSlider from "../../components/CustomSlider";
// import iimg1 from "../../components/img1.jpg";
// import iimg2 from "../../components/img2.jpg";
// import iimg3 from "../../components/img3.jpg";
// import img1 from "./NewsImages/1.jpg";
// import img2 from "./NewsImages/2.jpg";
// import img3 from "./NewsImages/3.png";
// import backgroundImage from "../HomePages/back.jpeg";

// function News() {
//   useEffect(() => {
//     axios.get('/news/list')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error making the request!', error);
//       });
//   }, []);

//   const sliderItems = [
//     { id: 1, image: iimg1, caption: "Слайд 1" },
//     { id: 2, image: iimg2, caption: "Слайд 2" },
//     { id: 3, image: iimg3, caption: "Слайд 3" },
//   ];

//   const newsData = [
//     {
//       id: 1,
//       title: "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
//       image: img1,
//     },
//     {
//       id: 2,
//       title: "У Львівській політехніці заявили, що підстав для звільнення Фаріон нема",
//       image: img2,
//     },
//     {
//       id: 3,
//       title: "Розкрито ще одну унікальну особливість iPhone 2024 року",
//       image: img3,
//     },
//   ];

//   return (
//     <div>
//       <div className="App">
//         <Header />
//         <div className="home-page row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//           <CustomSlider items={sliderItems} />
//           <div className="news-grid col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
//             {newsData.map((newsItem) => (
//               <div key={newsItem.id} className="news-item">
//                 <img src={newsItem.image} alt={newsItem.title} />
//                 <h2>{newsItem.title}</h2>
//                 <p>{newsItem.description}</p>
//                 <button className="btn btn-primary">Read More</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../App.css";
// import Header from "../../components/Header";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CustomSlider from "../../components/CustomSlider";
// import backgroundImage from "../HomePages/back.jpeg";

// function News() {
//   const [news_data, setNewsData] = useState([]);

//   useEffect(() => {
//     axios.get('/news/list')
//       .then(response => {
//         setNewsData(response.data); // Assuming response.data is an array of news items
//       })
//       .catch(error => {
//         console.error('There was an error making the request!', error);
//       });
//   }, []);

//   const sliderItems = [
//     { id: 1, image: "", caption: "Слайд 1" }, // Placeholder for slider items
//     { id: 2, image: "", caption: "Слайд 2" },
//     { id: 3, image: "", caption: "Слайд 3" },
//   ];

//   return (
//     <div>
//       <div className="App">
//         <Header />
//         <div className="home-page row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//           <CustomSlider items={sliderItems} />
//           <div className="news-grid col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
//             {Array.isArray(news_data) && news_data.length > 0 ? (
//               news_data.map((newsItem) => (
//                 <div key={newsItem.id} className="news-item">
//                   <img src={newsItem.image} alt={newsItem.title} />
//                   <h2>{newsItem.title}</h2>
//                   <p>{newsItem.description}</p>
//                   <button className="btn btn-primary">Read More</button>
//                 </div>
//               ))
//             ) : (
//               <p>No news available</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import backgroundImage from "../HomePages/back.jpeg";
import CustomSlider from "../../components/CustomSlider";
import iimg1 from "../../components/img1.jpg";
import iimg2 from "../../components/img2.jpg";
import iimg3 from "../../components/img3.jpg";
const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/news/list');
                console.log(response.data); // log the response data here
                setNews(response.data.news);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);
  const sliderItems = [
    { id: 1, image: iimg1, caption: "Слайд 1" },
    { id: 2, image: iimg2, caption: "Слайд 2" },
    { id: 3, image: iimg3, caption: "Слайд 3" },
  ];

    return (
        <div className="App">
            <Header />
            <div div className="home-page row d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <CustomSlider items={sliderItems} />
//           <div className="news-grid col-9 justify-content-center mt-5 mb-5" style={{ backgroundColor: "grey" }}>
            <ul>
                {Array.isArray(news) && news.map((item) => (
                    <li key={item.id}>
                        
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary">Read More</button>
            </div>
            </div>
        </div>
    );
};

export default NewsPage;