import { useState } from "react";

import "../styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">

      {/* Header */}

      <div className="contact-header">

        <span>
          GET IN TOUCH
        </span>

        <h1>
          Contact StudentHub
        </h1>

        <p>
          Have a question or feedback?
          Send us a message and we will
          get back to you.
        </p>

      </div>

      {/* Contact Content */}

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>
            Let's talk
          </h2>

          <p>
            Whether you have a question about
            StudentHub or simply want to share
            your feedback, we would love to
            hear from you.
          </p>

          <div className="contact-info-list">

            <div className="contact-info-item">

              <div className="contact-info-icon">
                📧
              </div>

              <div>
                <strong>Email</strong>

                <span>
                  admin@studenthub.com
                </span>
              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                📍
              </div>

              <div>
                <strong>Location</strong>

                <span>
                  India
                </span>
              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                🕐
              </div>

              <div>
                <strong>Response Time</strong>

                <span>
                  Within 24 hours
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form-card">

          <h2>
            Send us a message
          </h2>

          {submitted && (
            <div className="contact-success">
              ✓ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>

            <div className="contact-field">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />

            </div>

            <div className="contact-field">

              <label>
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;