import { useState } from "react";
import { sendContactMessage } from "../utils/contacts"; // Import the sendContactMessage function
import "../assets/css/watermark.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const concatenatedMessage = `${formData.subject}: ${formData.message}`;
      const response = await sendContactMessage({
        name: formData.name,
        email: formData.email,
        message: concatenatedMessage,
      });
      setStatus({
        loading: false,
        success: "Message sent successfully!",
        error: null,
      });
      console.log("Response:", response);
      setFormData({ name: "", email: "", message: "", subject: "" });
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: error.response?.data?.message || "Failed to send message.",
      });
    }
  };

  return (
    <>
      {/* Meta and Breadcrumb */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Contact</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        cols={30}
                        rows={9}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Message"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button-contactForm btn_1"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {status.success && (
                <p className="text-success mt-3">{status.success}</p>
              )}
              {status.error && (
                <p className="text-danger mt-3">{status.error}</p>
              )}
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home" />
                </span>
                <div className="media-body">
                  <h3>Your Address</h3>
                  <p>City, Country</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet" />
                </span>
                <div className="media-body">
                  <h3>+123 456 7890</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email" />
                </span>
                <div className="media-body">
                  <h3>email@example.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
