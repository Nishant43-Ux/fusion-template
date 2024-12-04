import  { useState } from "react";

function PreRegister() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://your-backend-endpoint.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Thank you for pre-registering!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Error: Unable to connect to the server.");
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
        {/* Pre-register content section end */}

        {/*::footer_part start::*/}
        <footer className="footer_part">
          <div className="footer_top">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="single_footer_part">
                    <a href="index.html" className="footer_logo_iner">
                      <img src="img/logo.png" alt="#" />
                    </a>
                    <p>
                      Heaven fruitful doesn&apos;t over lesser days appear
                      creeping seasons so behold bearing days open
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_footer_part">
                    <h4>Contact Info</h4>
                    <p>
                      Address: Your address goes here, your demo address.
                      Bangladesh.
                    </p>
                    <p>Phone: +8880 44338899</p>
                    <p>Email: info@colorlib.com</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_footer_part">
                    <h4>Important Links</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">WHMCS-bridge</a>
                      </li>
                      <li>
                        <a href="#">Search Domain</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="#">Our Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_footer_part">
                    <h4>Newsletter</h4>
                    <p>
                      Heaven fruitful doesn&apos;t over lesser in days. Appear
                      creeping seasons deve behold bearing days open
                    </p>
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                        method="get"
                        className="subscribe_form relative mail_part"
                      >
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          placeholder="Email Address"
                          className="placeholder hide-on-focus"
                          onFocus={() => (this.placeholder = "")}
                          onBlur={() => (this.placeholder = "Email Address")}
                        />
                        <button
                          type="submit"
                          name="submit"
                          id="newsletter-submit"
                          className="email_icon newsletter-submit button-contactForm"
                        >
                          <i className="far fa-paper-plane" />
                        </button>
                        <div className="mt-10 info" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copygight_text">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="copyright_text">
                    <p>
                      Copyright © All rights reserved | This template is made
                      with <i className="ti-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer_icon social_icon">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="single_social_icon">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single_social_icon">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single_social_icon">
                          <i className="fas fa-globe" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single_social_icon">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*::footer_part end::*/}
      </div>
    </>
  );
}

export default PreRegister;
