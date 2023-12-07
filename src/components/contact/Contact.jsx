import React, { useState } from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(true);

  const toggleEmailForm = () => {
    if (!showEmailForm) {
      setShowEmailForm(true);
    }
  };

  const toggleWhatsAppForm = () => {
    if (showEmailForm) {
      setShowEmailForm(false);
    }
  };

  return (
    <section id="contact">
      <h5>Let's create and innovate</h5>
      <h2>Contact Me</h2>

      <div className="form-toggler text-center my-4">
        <TfiEmail className="me-4 icon" onClick={toggleEmailForm}/>
        <FaWhatsapp className="icon" onClick={toggleWhatsAppForm}/>
      </div>

      {showEmailForm && (
        <form action="" className="container col-12 col-md-6 offset-md-3">
          <div className="form-control p-2">
            <input className="form-control p-2" type="text" placeholder="Email" />
          </div>
          <div className="form-control mt-3 p-2">
            <textarea
              className="form-control p-2"
              placeholder="Message..."
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input className="btn input-btn my-3" type="submit" value="Submit" />
        </form>
      )}

      {!showEmailForm && (
        <form action="" className="container col-12 col-md-6 offset-md-3">
          <div className="form-control p-2">
            <input className="form-control p-2" type="text" placeholder="Phone Number" />
          </div>
          <div className="form-control mt-3 p-2">
            <textarea
              className="form-control p-2"
              placeholder="Message..."
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input className="btn input-btn my-3" type="submit" value="Submit" />
        </form>
      )}
    </section>
  );
};

export default Contact;
