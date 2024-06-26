// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";
// import Header from "../../components/Header";
// import "./NewsDetail.css";
// import img1 from "./NewsImages/1.jpg";
// import img11 from "./NewsImages/11.jpg";
// import img2 from "./NewsImages/2.jpg";
// import img22 from "./NewsImages/22.jpg";
// import img3 from "./NewsImages/3.png";
// import img33 from "./NewsImages/33.png";
// <link
//   rel="stylesheet"
//   href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
// />;

// function NewsDetail() {
//   const { id } = useParams();

//   const newsData = {
//     1: {
//       title:
//         "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
//       content1:
//         "Російські окупанти вночі обстріляли житловий будинок у місті Селидове Донецької області, у результаті чого обвалився під’їзд, одна жінка загинула, кілька мешканців дістали поранення, під завалами шукають ще щонайменше одну людину.",
//       content2:
//         "На жаль, під завалами знайшли тіло загиблої жінки. Ймовірно під руїнами ще залишається щонайменше одна особа. Нагадаємо, що російські солдати обстріляли селище Селидове Донецької області. Вночі 15 листопада ворог вдарив по багатоповерхівці, внаслідок чого знищено цілий під'їзд. Також цей обстріл прокоментували в Генпрокуратурі України.",
//       image1: img1,
//       image2: img11,
//     },
//     2: {
//       title:
//         "У Львівській політехніці заявили, що підстав для звільнення Фаріон нема",
//       content1:
//         "У ректораті університету Львівська політехніка кажуть, що наразі немає підстав для звільнення з посади викладачки колишньої народної депутатки Ірини Фаріон.",
//       content2:
//         "В інтерв'ю Фаріон звинуватила військових, зокрема бійців Азову та 3-ї ОШБр, в тому, що вони спілкуються російською мовою. Вона заявила, що не може назвати їх українцями. ЇЇ висловлювання викликали хвилю обурення в суспільстві. ",
//       image1: img2,
//       image2: img22,
//     },
//     3: {
//       title: "Розкрито ще одну унікальну особливість iPhone 2024 року",
//       content1:
//         "Так, у лінійці iPhone 16 компанія вперше використовуватиме графен. Графен має високу теплопровідність, значно перевищуючи мідь, яка використовується для тепловідведення в поточних смартфонах Apple.",
//       content2:
//         "Водночас акумулятори iPhone 16 Pro та iPhone 16 Pro Max отримають корпус із металу, а не чорної фольги, що також допоможе знизити нагрівання внутрішніх компонентів пристроїв. Таким чином, наступні смартфони Apple можуть стати найхолоднішими в історії бренду.",
//       image1: img3,
//       image2: img33,
//     },
//   };

//   const newsItem = newsData[id];

//   if (!newsItem) {
//     return <div>Новина не знайдена</div>;
//   }

//   return (
//     <div className="first">
//       <Header />
//       <div className="news-detail-container form_container p-5 rounded">
//         <form className="f">
//           <div className="d-flex justify-content-between m-2">
//             <div className="col-6 d-flex flex-column align-items-start">
//               <h2 className="card-title">{newsItem.title}</h2>
//               <p className="card-text m-2" style={{ fontFamily: "Open Sans" }}>
//                 <em>{newsItem.content1}</em>
//               </p>
//             </div>
//             <div className="col-6 w-100 m-2">
//               {newsItem.image1 && (
//                 <img
//                   className="card-img-top"
//                   src={newsItem.image1}
//                   alt={`Зображення для ${newsItem.title}`}
//                   style={{ maxWidth: "100%", height: "auto" }}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="d-flex justify-content-between m-2">
//             <div className="col-6 w-100">
//               {newsItem.image2 && (
//                 <img
//                   className="card-img-top"
//                   src={newsItem.image2}
//                   alt={`Зображення для ${newsItem.title}`}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "cover",
//                     aspectRatio: "16 / 9",
//                   }}
//                 />
//               )}
//             </div>
//             <p className="card-text m-2" style={{ fontFamily: "Open Sans" }}>
//               <em>{newsItem.content2}</em>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default NewsDetail;
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import backgroundImage from "../HomePages/back.jpeg";
import Footer from "../../components/Footer";
import img1 from "./NewsImages/1.jpg";
import img11 from "./NewsImages/11.jpg";
import img2 from "./NewsImages/2.jpg";
import img22 from "./NewsImages/22.jpg";
import img3 from "./NewsImages/3.png";
import img33 from "./NewsImages/33.png";

const NewsDetails = () => {
  const { id } = useParams();
  const news = [
    {
      id: 1,
      title: "Відкриття нового парку",
      content: "Місцева влада відкрила новий парк у центрі міста. Парк включає дитячий майданчик, зону для пікніків та велодоріжки. Всі мешканці міста запрошуються на відкриття, яке відбудеться наступного тижня.",
      image: img1
    },
    {
      id: 2,
      title: "Реконструкція дороги",
      content: "Розпочато роботи з реконструкції головної дороги міста. Очікується, що роботи триватимуть протягом трьох місяців. У зв'язку з цим можливі затримки руху. Водіїв просять бути обережними.",
      image: img2
    },
    {
      id: 3,
      title: "Місцевий фестиваль мистецтв",
      content: "У місті стартує щорічний фестиваль мистецтв, на якому будуть представлені роботи місцевих художників. Подія включає виставки, майстер-класи та концерти. Вхід вільний для всіх бажаючих.",
      image: img3
    },
    {
      id: 4,
      title: "Екологічна акція",
      content: "Цього тижня у парку відбудеться екологічна акція з прибирання території. Усі бажаючі можуть долучитися до акції та зробити свій внесок у збереження довкілля. Початок о 10:00.",
      image: img2
    },
    {
      id: 5,
      title: "Новий спортивний комплекс",
      content: "Місто отримало новий спортивний комплекс з басейном, тренажерною залою та тенісними кортами. Комплекс буде відкритий для відвідувачів з наступного місяця. Очікується, що він стане популярним серед мешканців.",
      image: img1
    },
    {
      id: 6,
      title: "Літній кінотеатр",
      content: "У міському парку відкрито літній кінотеатр. Кожного вечора будуть показувати фільми під відкритим небом. Глядачам пропонується приносити з собою пледи та закуски. Початок сеансів о 20:00.",
      image: img3
    },
    {
      id: 7,
      title: "Виставка сучасного мистецтва",
      content: "У місцевій галереї відкрилася виставка сучасного мистецтва. На виставці представлені роботи молодих художників. Виставка триватиме до кінця місяця. Вхід вільний для всіх бажаючих.",
      image: img1
    },
    {
      id: 8,
      title: "Благодійний забіг",
      content: "У місті відбудеться благодійний забіг на підтримку дітей, які потребують медичної допомоги. Усі зібрані кошти будуть направлені на лікування. Участь у забігу можуть взяти всі бажаючі. Початок о 9:00.",
      image: img2
    },
    {
      id: 9,
      title: "Вечір поезії",
      content: "У бібліотеці міста відбудеться вечір поезії, на якому виступлять місцеві поети. Гості зможуть послухати нові вірші та поспілкуватися з авторами. Захід розпочнеться о 18:00.",
      image: img3
    },
    {
      id: 10,
      title: "Майстер-клас з кулінарії",
      content: "У кулінарній школі міста відбудеться майстер-клас з приготування італійських страв. Усі бажаючі можуть взяти участь та навчитися готувати справжню італійську пасту. Початок о 15:00.",
      image: img2
    }
  ];


  const currentNews = news.find(item => item.id === parseInt(id));

  if (!currentNews) {
    return <div>Новина не знайдена</div>;
  }

  return (
    <div className="App">
      <Header />
      <div className="container-fluid d-flex justify-content-center" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}>
      <form className=" col-10 d-flex m-3 d-flex justify-content-center" style={{ backgroundColor: "grey", borderRadius: '10px' }}>
      <form className=" col-11 d-flex m-3" style={{ backgroundColor: "rgb(172, 164, 119)", borderRadius: '10px' }}>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>{currentNews.title}</h1>
            <img style={{borderRadius: '10px' }} src={currentNews.image} alt={currentNews.title} className="img-fluid" />
            <h3 className='mt-4 mb-4'>{currentNews.content}</h3>
          </div>
        </div>
        
        </form>
          </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
