import React from "react";
import "./LoginModal.css";

const LoginModal = (props) => {
  return (
    <>
      <div
        className="modal fade login_pagess"
        id="exampleModallogin"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModallogin"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login"
          role="document"
        >
          <div className="modal-content container">
          <div className="login_card">
          <img src="assets/img/Group 8373.png" className="login_flogo" />

          <form className="login-form">
            <div className="form-group">
              <img src="img/Icon feather-mail.png" />
              <input
                type="text"
                name=""
                placeholder="E-Mail "
                className="form-control"
              />
            </div>
            <div className="form-group">
              <img src="img/Icon feather-lock.png" />
              <input
                type="text"
                name=""
                placeholder="Password"
                className="form-control"
              />
              <div className="forget-pass">
                <a href="#">Forget Password ?</a>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-default br-5">LOGIN</button>
            </div>
            <p className="no-acc">
              Dont Have An Account <a href="#">SignUp</a>
            </p>
          </form>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

