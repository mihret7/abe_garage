import React from 'react';
import bg1 from '../../../assets/images/banner/banner_5.jpg';
const BottomBanner = () => {
  return (
    <section className="video-section">
      <div
        className="sec-bg"
        style={{ backgroundImage: `url(${bg1})` }}
        data-parallax={{ y: 50 }}
      ></div>
      <div className="auto-container">
        <h5>Working since 1992</h5>
        <h2>
          We are leader <br /> in Car Mechanical Work
        </h2>
        <div className="video-box">
          <div className="video-btn">
            <a
              href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
              className="overlay-link lightbox-image video-fancybox ripple"
              target="_blank"
            >
              <i className="flaticon-play"></i>
            </a>
          </div>
          <div className="text">
            Watch intro video <br /> about us
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomBanner;
