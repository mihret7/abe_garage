import React from 'react'

const CtaSec = () => {
  return (
    <section className="cta-section">
      <div className="auto-container">
        <div className="wrapper-box">
          <div className="left-column">
            <h3>Schedule Your Appointment Today</h3>
            <div className="text">Your Automotive Repair & Maintenance Service Specialist</div>
          </div>
          <div className="right-column">
            <div className="phone">1900.000.0000</div>
            <div className="btn">
              <a href="/contact" className="theme-btn btn-style-one">
                <span>Contact us</span><i className="flaticon-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSec;
