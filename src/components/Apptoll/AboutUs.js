import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <section className="about_us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_img">
              <img src="assets/img/Group 9093.png" alt="img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_org">
              <h3 className="main_h">About Us</h3>
              <div className="underline"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="about_services">
          <div className="row mx-0">
            <div className="col-md-4">
              <div className="card_about">
                <img src="assets/img/Group 9164.png" alt="img" />
                <h5>1 .Create Account</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_about">
                <img src="assets/img/Group 9165.png" alt="img" />
                <h5>2. Invest To Plan</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_about">
                <img src="assets/img/Group 9166.png" alt="img" />
                <h5>3. Get Profit</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="abt-btn">
            {/* <button className="btn btn-default abt-btn"></button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
