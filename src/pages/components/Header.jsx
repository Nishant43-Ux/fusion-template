import  { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("main_menu single_page_menu");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderClass(
          "main_menu single_page_menu menu_fixed animated fadeInDown"
        );
      } else {
        setHeaderClass("main_menu single_page_menu");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
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
                  {" "}
                  <img src="img/logo.png" alt="logo" />{" "}
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
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/fighter">
                        Fusion
                      </a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="/team">
                        Team
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/blogs"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="/blogs">
                          {" "}
                          Blog
                        </a>
                        <a className="dropdown-item" href="/blog-one">
                          Single blog
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown1"
                      >
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact-us">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn_1 d-none d-sm-block">
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
