import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {


  return (
    <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="footer-content">
            <div class="row">
              <div class="col-md-3">
                <h5>Контакти</h5>
                <ul>
                  <li><i class="fa fa-envelope"></i> <a href="mailto:example@example.com">example@example.com</a></li>
                  <li><i class="fa fa-phone"></i> <a href="tel:+380123456789">+380 12 345 67 89</a></li>
                  <li><i class="fa fa-globe"></i> <a href="https://www.example.com" target="_blank">example.com</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Посилання</h5>
                <ul>
                  <li><a href="#">Про нас</a></li>
                  <li><a href="#">Умови використання</a></li>
                  <li><a href="#">Політика конфіденційності</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Соціальні мережі</h5>
                <ul>
                  <li><a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i> Facebook</a></li>
                  <li><a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i> Instagram</a></li>
                  <li><a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"></i> Twitter</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Новини</h5>
                <ul>
                  <li><a href="#">Останні новини</a></li>
                  <li><a href="#">Архів новин</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='d-flex justify-content-center mt-3'>

    <p class="copyright">© 2023 Example Inc. All rights reserved.</p>
    </div>
  </footer>
  );
}

export default Footer;

