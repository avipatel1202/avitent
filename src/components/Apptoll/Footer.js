import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="page-footer font-small indigo">
        {/* Footer Links */}
        <div class="container">
          {/* Grid row*/}
          <ul class="row text-center d-flex justify-content-center pt-5 mb-3">
            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">Home</a>
              </h6>
            </li>
            {/* Grid column */}

            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">About us</a>
              </h6>
            </li>
            {/* Grid column */}

            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">App features</a>
              </h6>
            </li>
            {/* Grid column */}

            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">How to invest</a>
              </h6>
            </li>
            {/* Grid column */}

            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">app ScreenShots</a>
              </h6>
            </li>
            {/* Grid column */}

            {/* Grid column */}
            <li class="">
              <h6 class="footer-menu">
                <a href="#!">Testomonials</a>
              </h6>
            </li>
            {/* Grid column */}
          </ul>
        </div>

        {/* Grid row*/}
        <div class="">
          {/* Grid column */}
          <div class="col-md-12">
            <div class="text-center flex-center">
              {/* Facebook */}
              <a class="fb-ic">
                <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
              </a>
              {/* Twitter */}
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
              </a>
              {/* Google +*/}
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
              </a>
              {/*Instagram*/}
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}

        {/* Grid row*/}
        <div class="">
          {/* Grid column */}
          <div class="col-md-12">
            <div class="text-center flex-center">
              {/* Facebook */}
              <a class="logo-foo">
                <img src="assets/img/Group 9115.png" class="img-responsive" />
              </a>
              {/* Twitter */}
              <a class="logo-foo">
                <img src="assets/img/Group 9116.png" class="img-responsive" />
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}

        {/* Footer Links */}

        {/* Copyright */}
        <div class="footer-copyright text-center py-3">
          © 2020 AppToll All Rights Reserved
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
