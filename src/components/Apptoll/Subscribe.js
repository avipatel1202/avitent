import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <h3 className="main_h text-center ">Subscribe to get updates</h3>

        <div className="underline screen-line"></div>
        <p className="subheading text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="text-center">
          <form
            className="form ClickCall_form"
            id="subscription"
            novalidate="novalidate"
            autocomplete="off"
          >
            <div className="input-group">
              <input
                type="email"
                name="data[email]"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <div className="pagesbutton">
                <button type="button" className=" btn btn-default btn-2">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
