function AboutUs() {
  return (
    <>
      {/* Introduction Section */}
      <section
        className="about_us section_padding"
        style={{ backgroundColor: "#111", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-6 col-xl-6">
              <div className="learning_img">
                <img
                  src="img/about_img.png"
                  alt="IceShard Games"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="about_us_text">
                <h2 style={{ color: "#dc143c" }}>
                  Shaping the Future of Immersive Entertainment
                </h2>
                <p>
                  At{" "}
                  <strong style={{ color: "#dc143c" }}>
                    IceShard Games Private Limited
                  </strong>
                  , we are dedicated to bridging the gap between gaming,
                  education, and virtual reality. Our mission is to create
                  experiences that inspire, connect, and engage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="vision section_padding"
        style={{ backgroundColor: "#111", color: "#fff" }}
      >
        <div className="container text-center">
          <h2 style={{ color: "#dc143c" }}>Our Vision</h2>
          <p>
            We envision a world where technology and creativity merge
            seamlessly, offering players not just games but virtual realms where
            they can explore, learn, and socialize like never before.
          </p>
          <div className="vision_img">
            <img
              src="img/home/vision.jpg"
              alt="Our Vision"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                borderRadius: "8px",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(220, 20, 60, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* Game Features Section */}
      <section
        className="game_features section_padding"
        style={{ backgroundColor: "#111", color: "#fff" }}
      >
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#dc143c" }}>
            Game Features
          </h2>
          <div className="row">
            {[
              { title: "Immersive Worlds", img: "img/home/immersive.jpg" },
              { title: "Customizable Avatars", img: "img/home/avatars.jpg" },
              { title: "Social Interaction", img: "img/home/media.jpg" },
              { title: "Cross-Platform Play", img: "img/home/platforms.jpg" },
            ].map((feature, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <h3 style={{ color: "#ff6347" }}>{feature.title}</h3>
                <p>
                  {feature.title === "Immersive Worlds" &&
                    "Step into expansive, beautifully crafted worlds where every detail captivates your imagination."}
                  {feature.title === "Customizable Avatars" &&
                    "Express yourself with highly customizable avatars using our advanced MetaHuman integration."}
                  {feature.title === "Social Interaction" &&
                    "Connect with friends, join guilds, or make new companions in a socially rich world."}
                  {feature.title === "Cross-Platform Play" &&
                    "Seamless gameplay across PC, VR, and mobile ensures you are always part of the action."}
                </p>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(255, 99, 71, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="cta section_padding text-center"
        style={{  color: "#1a1718" }}
      >
        <div className="container">
          <h2 style={{ color: "#dc143c" }}>Be a Part of the Future</h2>
          <p>
            Register now for exclusive early access to{" "}
            <strong style={{ color: "#ff6347" }}>Fusion</strong> and join the
            journey before anyone else.
          </p>
          <a
            href="#"
            className="btn btn-danger"
            style={{ backgroundColor: "#dc143c", borderColor: "#dc143c" }}
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
