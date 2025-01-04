import { useState, useEffect } from "react";
import "../../assets/css/logo.css";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("main_menu single_page_menu");
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderClass(
          "main_menu single_page_menu menu_fixed animated fadeInSlow"
        );
        setIsScrolled(true); // Set scrolled to true
      } else {
        setHeaderClass("main_menu single_page_menu");
        setIsScrolled(false); // Set scrolled to false
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*::header part start::*/}
      <header className={headerClass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  {headerClass !== "main_menu single_page_menu" && (
                    <img
                      src="img/logos/default_logo.png"
                      alt="logo"
                      className="responsive-img"
                      loading="lazy"
                    />
                  )}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon">
                    <i className="fas fa-bars" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          isScrolled ? "scrolled" : "top"
                        }`}
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          isScrolled ? "scrolled" : "top"
                        }`}
                        href="/fusion"
                      >
                        Fusion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          isScrolled ? "scrolled" : "top"
                        }`}
                        href="/team"
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          isScrolled ? "scrolled" : "top"
                        }`}
                        href="/contact-us"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="/pre-register" className="btn_1 d-none d-sm-block">
                  Pre-Register
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
