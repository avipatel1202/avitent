import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <section className="download-app">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="ds-left">
              <div>
                <h3 className="up-head">Download Our App</h3>
                <h3 className="main_h">App is available for all device</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>

              <div className=" down_section">
                {/* Facebook  */}
                <a className="down-foo google_play">
                  <img src="assets/img/Group 9115.png" className="img-responsive" />
                </a>
                {/* Twitter */}
                <a className="down-foo">
                  <img src="assets/img/Group 9116.png" className="img-responsive" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ds-right">
              <div className="download-overlay">
                <img src="assets/img/Group 9176.png" className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
