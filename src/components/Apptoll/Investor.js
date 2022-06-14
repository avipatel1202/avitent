import React from "react";
import "./Investor.css";

const Investor = () => {
  return (
    <section className="investor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card investor-card">
              <h3>How investor is investing</h3>
              <div className="underline"></div>
              <div className="investor-description">
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is et Malorum for use in a type specimen book. The passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts of Cicero's De Finibus
                  Bonorum. The passage is attributed to an unknown typesetter in
                  the 15th century who is thought to have scrambled parts of
                  Cicero's De Finibus Bonorum
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 investor-img">
            <img src="assets/img/Group 9175.png" className="img-responsive" />

            <div>
              <img
                src="assets/img/Group 9106.png"
                className="investor-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investor;
