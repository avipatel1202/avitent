import React from "react";
import './ScreenShot.css';

const ScreenShot = () => {
  return (
    <section className="screenshot">
      <div id="screenshot">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h3 className="main_h text-center ">App ScreenShots</h3>

              <div className="underline screen-line"></div>

              <p className="subheading text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>

            <div className="owl-carousel owl-theme" id="OURTEAM">
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img src="assets/img/08 Home@3x.png" className=" img-fluid" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img src="assets/img/09 Invest@3x.png" className=" img-fluid" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img
                      src="assets/img/10 Details@3x.png"
                      className=" img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img
                      src="assets/img/11 My investments@3x.png"
                      className=" img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img src="assets/img/08 Home@3x.png" className=" img-fluid" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-text">
                  <div className="img-area">
                    <img src="assets/img/09 Invest@3x.png" className=" img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenShot;
