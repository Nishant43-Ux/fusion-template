import { useState } from "react";
import { sendEmailToDB } from "../utils/pre-register";
import "../assets/css/pre-register.css";

function PreRegister() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendEmailToDB({ email }); // Sending only the email

      if (response.status) {
        setMessage("Thank you for pre-registering!");
        setEmail(""); // Clear the input field
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error:The Email Already exists or the server is unable to register");
      console.error("Pre-registration failed:", error);
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="pre_register_banner">
        <div className="container text-center">
          <h1 className="pre_register_heading">Fusion Pre-Register Now</h1>
          <p className="pre_register_subtitle">
            Step into the ultimate virtual universe and claim your exclusive
            spot.
          </p>
        </div>
      </section>

      {/* Why Pre-Register Section */}
      <section className="why_pre_register section_padding">
        <div className="container">
          <h2 className="section_heading text-center mb-5">
            Why Pre-Register for <span className="highlight">Fusion?</span>
          </h2>
          <div className="row feature_cards">
            <div className="col-lg-4">
              <div className="feature_card">
                <div className="feature_icon">🚀</div>
                <h3 className="feature_title">Exclusive Rewards</h3>
                <p className="feature_desc">
                  Limited-edition skins, badges, and in-game currency at launch.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature_card">
                <div className="feature_icon">🎮</div>
                <h3 className="feature_title">Early Access</h3>
                <p className="feature_desc">
                  Get priority access to beta testing and exclusive updates.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature_card">
                <div className="feature_icon">🌎</div>
                <h3 className="feature_title">Community Perks</h3>
                <p className="feature_desc">
                  Join a global player community and participate in early
                  discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pre_register_form_wrapper section_padding">
        <div className="container">
          <div className="form_wrapper">
            <h2 className="form_heading">Pre-Register Today</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn_submit">
                Pre-Register Now
              </button>
              {message && <div className="alert_message">{message}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreRegister;
