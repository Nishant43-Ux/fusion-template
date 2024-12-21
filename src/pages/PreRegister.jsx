import { useState } from "react";
import { sendEmailToDB } from "../utils/pre-register";
import "../assets/css/pre-register.css";

function PreRegister() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const spinnerStyle = {
    margin: "10px auto",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: "spin 0.8s linear infinite",
  };

  const spinAnimation = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await sendEmailToDB({ email, name, username });

      if (response.status) {
        setMessage("Thank you for pre-registering!");
        setEmail(""); // Clear the input fields
        setName("");
        setUsername("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: The email already exists.");
      console.error("Pre-registration failed:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <style>{spinAnimation}</style>

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
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
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
              <button type="submit" className="btn_submit" disabled={loading}>
                {loading ? "Submitting..." : "Pre-Register Now"}
              </button>
              {loading && <div style={spinnerStyle}></div>}
              {message && <div className="alert_message">{message}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreRegister;
