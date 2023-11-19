import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import HeaderLite from "../../components/header_lite";
import "./NewsDetail.css";
import img1 from "./NewsImages/1.jpg";
import img11 from "./NewsImages/11.jpg";
import img2 from "./NewsImages/2.jpg";
import img22 from './NewsImages/22.jpg'
import img3 from './NewsImages/3.png'
import img33 from './NewsImages/33.png'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" />

function NewsDetail() {
  const { id } = useParams();

  const newsData = {
    1: {
      title:
        "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
      content1:
        "Російські окупанти вночі обстріляли житловий будинок у місті Селидове Донецької області, у результаті чого обвалився під’їзд, одна жінка загинула, кілька мешканців дістали поранення, під завалами шукають ще щонайменше одну людину.",
      content2:
        "На жаль, під завалами знайшли тіло загиблої жінки. Ймовірно під руїнами ще залишається щонайменше одна особа. Нагадаємо, що російські солдати обстріляли селище Селидове Донецької області. Вночі 15 листопада ворог вдарив по багатоповерхівці, внаслідок чого знищено цілий під'їзд. Також цей обстріл прокоментували в Генпрокуратурі України.",
      image1: img1,
      image2: img11,
    },
    2: {
      title:
        "У Львівській політехніці заявили, що підстав для звільнення Фаріон нема",
      content1: "У ректораті університету Львівська політехніка кажуть, що наразі немає підстав для звільнення з посади викладачки колишньої народної депутатки Ірини Фаріон.",
      content2: "В інтерв'ю Фаріон звинуватила військових, зокрема бійців Азову та 3-ї ОШБр, в тому, що вони спілкуються російською мовою. Вона заявила, що не може назвати їх українцями. ЇЇ висловлювання викликали хвилю обурення в суспільстві. ",
      image1: img2,
      image2: img22,
    },
    3: {
      title: "Розкрито ще одну унікальну особливість iPhone 2024 року",
      content1: "Так, у лінійці iPhone 16 компанія вперше використовуватиме графен. Графен має високу теплопровідність, значно перевищуючи мідь, яка використовується для тепловідведення в поточних смартфонах Apple.",
      content2: "Водночас акумулятори iPhone 16 Pro та iPhone 16 Pro Max отримають корпус із металу, а не чорної фольги, що також допоможе знизити нагрівання внутрішніх компонентів пристроїв. Таким чином, наступні смартфони Apple можуть стати найхолоднішими в історії бренду.",
      image1: img3,
      image2: img33,
    },
  };

  const newsItem = newsData[id];

  if (!newsItem) {
    return <div>Новина не знайдена</div>;
  }

  return (
    <div className="first">
      <HeaderLite />
      <div className="news-detail-container form_container p-5 rounded">
        <form className="f">
          <div className="d-flex justify-content-between m-2">
            <div className="col-6 d-flex flex-column align-items-start">
              <h2 className="card-title">{newsItem.title}</h2>
              <p className="card-text m-2" style={{ fontFamily: 'Open Sans' }}><em>{newsItem.content1}</em></p>
            </div>
            <div className="col-6 w-100 m-2">
              {newsItem.image1 && (
                <img
                  className="card-img-top"
                  src={newsItem.image1}
                  alt={`Зображення для ${newsItem.title}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between m-2">
            <div className="col-6 w-100">
              {newsItem.image2 && (
                <img
                className="card-img-top"
                src={newsItem.image2}
                alt={`Зображення для ${newsItem.title}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "16 / 9",
                }}
                />
                )}
            </div>
                <p className="card-text m-2" style={{ fontFamily: 'Open Sans' }}><em>{newsItem.content2}</em></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsDetail;
