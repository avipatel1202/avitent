import React from "react";
import { useState } from "react";
import "./Header.css";
// import { $ } from "react-jquery-plugin";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Header = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <section className="main-banner">
        <header className="index-header d-flex justify-content-center">
          <nav className="navbar  navbar-expand-xl navbar-light bg-light apptoll_navbar">
            <div className="container px-0">
              <a className="navbar-brand" href="#">
                <img src="/assets/img/Group 8373.png" alt="logo" />
              </a>
              <div className="collapse navbar-collapse" id="navbarsExample06">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalinvest1"
                    >
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalinvest2"
                    >
                      About App
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalinvest3"
                    >
                      app features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="modal"
                    >
                      how to invest
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#screenshot">
                      app screenshot
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Testomonialid">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item loginbutton login-space">
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#exampleModallogin"
                    >
                      login
                    </a>
                  </li>
                  <li className="nav-item loginbutton">
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#exampleModalsignup"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="app-toll-banner ">
            <div className="container_fluid">
              <div className="row p-0 m-0 d-flex flex-wrap">
                <div className="col-md-7">
                  <div className="apptoll_banner_content ">
                    <h3>
                      Invest For Future in Stable Platfrom and Make Fast Money
                    </h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod
                    </p>

                    <div className="pagesbutton">
                      <a href="#" className="btn ">
                        Register now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src="assets/img/Group 9163.png"
                    className="img-responsive slider-overlay"
                  />
                  <img
                    src="assets/img/Group 9162.png"
                    className="img-responsive slider-overlay2"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <LoginModal />
      <SignupModal />
    </>
  );
};

export default Header;
