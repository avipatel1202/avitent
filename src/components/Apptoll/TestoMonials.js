import React from "react";
import "./TestoMonials.css";

const TestoMonials = () => {
  return (
    <section className="Testomonial" id="Testomonialid">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <h3 className="main_h text-center ">Testomonials</h3>
        <div className="underline screen-line"></div>
      </div>

      <div className="carousel slide container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active pic">
              <img className="d-block" src="assets/img/Ellipse 5.png" alt="First slide" />
            </div>
            <div className="carousel-item pic">
              <img className="d-block" src="assets/img/Ellipse 5.png" alt="Second slide" />
            </div>
            <div className="carousel-item pic">
              <img className="d-block" src="assets/img/Ellipse 5.png" alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestoMonials;
