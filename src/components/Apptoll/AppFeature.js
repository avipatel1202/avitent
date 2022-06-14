import React from "react";
import "./AppFeatures.css";

const AppFeature = () => {
  return (
    <div id="features" className="bg-gray-light">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h3 className="main_h text-center ">App Features</h3>
              <div className="underline line-features"> </div>
              <p className="subheading text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br /> industry. Lorem standard dummy text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-12 col-md-12">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="text-center">
                    <img
                      src="assets/img/Group 9170.png"
                      alt=""
                      className="img-fluid mb-3"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                  {/* Item 1*/}
                  <div className="rs-icon-info ">
                    <div className="info-icon">
                      <img
                        src="assets/img/Group 9171.png"
                        className="img-responsive"
                      />
                    </div>
                    <div className="info-text">
                      <p className="lead text-primary">
                        <strong>Unlimited Colors</strong>
                      </p>
                      Lorem gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin qui lorem quis bibendum auci elit velit
                      conse.
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="rs-icon-info">
                    <div className="info-icon">
                      <img
                        src="assets/img/Group 9172.png"
                        className="img-responsive"
                      />
                    </div>
                    <div className="info-text">
                      <p className="lead text-primary">
                        <strong>Fully Customize</strong>
                      </p>
                      Lorem gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin qui lorem quis bibendum auci elit velit
                      conse.
                    </div>
                  </div>
                  {/* Item 3*/}
                  <div className="rs-icon-info ">
                    <div className="info-icon">
                      <img
                        src="assets/img/Group 9173.png"
                        className="img-responsive"
                      />
                    </div>
                    <div className="info-text">
                      <p className="lead text-primary">
                        <strong>Free Download</strong>
                      </p>
                      Lorem gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin qui lorem quis bibendum auci elit velit
                      conse.
                    </div>
                  </div>
                  {/* Item 4*/}
                  <div className="rs-icon-info ">
                    <div className="info-icon">
                      <img
                        src="assets/img/Group 9174.png"
                        className="img-responsive"
                      />
                    </div>
                    <div className="info-text">
                      <p className="lead text-primary">
                        <strong>Free Download</strong>
                      </p>
                      Lorem gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin qui lorem quis bibendum auci elit velit
                      conse.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeature;
