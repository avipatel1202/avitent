import React from "react";
import "./Otp.css";
const Otp = () => {
  return (
    <div>
      
        <div className="otp_card">
          <img src="assets/img/Group 8373.png" className="login_flogo" />
          <h4>OTP Verification</h4>
          <p className="otp_para">613-555-0139</p>
          <form className="otp-form">
            <div className="tablediv">
              <div className="tablerow">
                <label className="tablecell cellbold ng-binding">
                  Enter your OTP code here
                </label>
                <div className="tablecell">
                  <label className="atm_card_details">
                    <input
                      type="text"
                      id="IBANNumber3"
                      ng-model="userbank.IBANNumber3"
                      placeholder={3}
                      required=""
                      min={4}
                      max={4}
                      maxLength={4}
                      pattern=".{4,}"
                      className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                    />
                    <input
                      type="text"
                      id="IBANNumber4"
                      ng-model="userbank.IBANNumber4"
                      placeholder={5}
                      required=""
                      min={4}
                      max={4}
                      maxLength={4}
                      pattern=".{4,}"
                      className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                    />
                    <input
                      type="text"
                      id="IBANNumber5"
                      ng-model="userbank.IBANNumber5"
                      placeholder={1}
                      required=""
                      min={4}
                      max={4}
                      maxLength={4}
                      pattern=".{4,}"
                      className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                    />
                    <input
                      type="text"
                      id="IBANNumber6"
                      ng-model="userbank.IBANNumber6"
                      placeholder={6}
                      required=""
                      min={4}
                      max={4}
                      maxLength={4}
                      pattern=".{4,}"
                      className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                    />
                  </label>
                </div>
              </div>
            </div>
            <p className="no-acc">
              Didn't receive the code? <a href="#">Resend Code</a>
            </p>
            <div className="otp-btns">
              <a href="">PAY NOW</a>
            </div>
          </form>
       
      </div>
    </div>
  );
};

export default Otp;
{
  /*
<div
  className="modal fade login_pagess"
  id="exampleModalotp"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered login" role="document">
    <div className="modal-content container">
      <div className="otp_card">
        <img src="assets/img/Group 8373.png" className="login_flogo" />
        <h4>OTP Verification</h4>
        <p className="otp_para">613-555-0139</p>
        <form className="otp-form">
          <div className="tablediv">
            <div className="tablerow">
              <label className="tablecell cellbold ng-binding">
                Enter your OTP code here
              </label>
              <div className="tablecell">
                <label className="atm_card_details">
                  <input
                    type="text"
                    id="IBANNumber3"
                    ng-model="userbank.IBANNumber3"
                    placeholder={3}
                    required=""
                    min={4}
                    max={4}
                    maxLength={4}
                    pattern=".{4,}"
                    className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                  />
                  <input
                    type="text"
                    id="IBANNumber4"
                    ng-model="userbank.IBANNumber4"
                    placeholder={5}
                    required=""
                    min={4}
                    max={4}
                    maxLength={4}
                    pattern=".{4,}"
                    className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                  />
                  <input
                    type="text"
                    id="IBANNumber5"
                    ng-model="userbank.IBANNumber5"
                    placeholder={1}
                    required=""
                    min={4}
                    max={4}
                    maxLength={4}
                    pattern=".{4,}"
                    className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                  />
                  <input
                    type="text"
                    id="IBANNumber6"
                    ng-model="userbank.IBANNumber6"
                    placeholder={6}
                    required=""
                    min={4}
                    max={4}
                    maxLength={4}
                    pattern=".{4,}"
                    className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength"
                  />
                </label>
              </div>
            </div>
          </div>
          <p className="no-acc">
            Didn't receive the code? <a href="#">Resend Code</a>
          </p>
          <div className="otp-btns">
            <a href="">PAY NOW</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
*/
}
