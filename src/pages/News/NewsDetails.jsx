import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import HeaderLite from "../../components/header_lite";
import "./NewsDetail.css";

function NewsDetail() {
  const { id } = useParams();

  const newsData = {
    1: {
      title:
        "Росіяни вдарили ракетою по Селидовому на Донеччині: є загибла, під завалами шукають людей",
      content1:
        "Російські окупанти вночі обстріляли житловий будинок у місті Селидове Донецької області, у результаті чого обвалився під’їзд, одна жінка загинула, кілька мешканців дістали поранення, під завалами шукають ще щонайменше одну людину.",
      content2:
        "На жаль, під завалами знайшли тіло загиблої жінки. Ймовірно під руїнами ще залишається щонайменше одна особа.",
      image1: "/News-images/1.jpg",
      image2: "/News-images/11.jpg",
    },
    2: {
      title:
        "У Львівській політехніці заявили, що підстав для звільнення Фаріон нема",
      content1: "Лорем іпсум текст для другої новини.",
      content2: "Лорем іпсум текст для другої новини.",
      image1: "/News-images/2.jpg",
      image2: "images/image22.jpg",
    },
    3: {
      title: "Новина 3",
      content1: "Лорем іпсум текст для другої новини.",
      content2: "Лорем іпсум текст для третьої новини.",
      image1: "images/image3.jpg",
      image2: "images/image33.jpg",
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
        <form className="d-flex justify-content-between">
          <div className="col-6 d-flex flex-column align-items-start">
            <h2 className="card-title">{newsItem.title}</h2>
            <p className="card-text">{newsItem.content1}</p>
          </div>
          <div className="col-6 w-100">
            {newsItem.image1 && (
              <img
                className="card-img-top"
                src={newsItem.image1}
                alt={`Зображення для ${newsItem.title}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
          <p className="card-text">{newsItem.content2}</p>
          <div className="col-6 w-100">
            {newsItem.imag2 && (
              <img
                className="card-img-top"
                src={newsItem.image2}
                alt={`Зображення для ${newsItem.title}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsDetail;
