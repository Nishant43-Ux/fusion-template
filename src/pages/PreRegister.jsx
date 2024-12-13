import { useState } from "react";
import { sendEmailToDB } from "../utils/pre-register";

function PreRegister() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendEmailToDB(email); // Use the sendEmailToDB utility

      if (response.insertedId) {
        setMessage("Thank you for pre-registering!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
      console.error("Pre-registration failed:", error);
    }
  };

  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <div className="body_bg">
        {/* breadcrumb start */}
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_iner text-center">
                  <div className="breadcrumb_iner_item">
                    <h2>Pre-Register</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb end */}

        {/* Pre-register content section */}
        <section className="pre_register_content section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2>Be the First to Join Fusion</h2>
                <p>
                  Enter your email below to pre-register and become part of the
                  next revolution in gaming, entertainment, and virtual worlds.
                  Stay tuned for updates and exclusive content!
                </p>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-6">
                <form className="pre_register_form" onSubmit={handleSubmit}>
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
                  <button type="submit" className="btn btn-primary btn-block">
                    Pre-Register Now
                  </button>
                  {message && (
                    <div className="mt-3 alert alert-info text-center">
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PreRegister;
