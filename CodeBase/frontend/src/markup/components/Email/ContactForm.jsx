import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3hyyrf6", "template_3u4m9j1", form.current, {
        publicKey: "5WLgPbzkqKK3VxMpa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Your message is sent successfully!");
          setMessageType("success");
          setInterval(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send your message. Please try again.");
          setMessageType("error");
        }
      );
  };

  return (

    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Contact US</h2>
        </div>

        <div className="row clearfix">
          <div className="form-column col-lg">
            <div className="inner-column">
              <div className="contact-form">
                {message && (
                  <div
                    className={`alert ${
                      messageType === "success"
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                  >
                    {message}
                  </div>
                )}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input type="text" name="user_name" placeholder="Name" />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="form-group col-md-12 contact_us">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Your message"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>SEND</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm