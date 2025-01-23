function AboutUs() {
  return (
    <>
      {/* Introduction Section */}
      <section
        className="about_us section_padding"
        style={{
          background: "linear-gradient(to bottom, #001a14, #000)", // Matching gradient
          color: "#00ffaa", // Teal text
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-6 col-xl-6">
              <div className="learning_img">
                <img
                  src="img/about_img.png"
                  alt="IceShard Games"
                  loading="lazy"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    border: "2px solid #00ffaa", // Teal border
                  }}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="about_us_text">
                <h2 style={{ color: "#00ff7f" }}>
                  {" "}
                  {/* Green heading */}
                  Shaping the Future of Immersive Entertainment
                </h2>
                <p>
                  At{" "}
                  <strong style={{ color: "#00ff7f" }}>
                    {" "}
                    {/* Green text */}
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
        style={{
          background: "linear-gradient(to bottom, #001a14, #000)", // Matching gradient
          color: "#00ffaa", // Teal text
        }}
      >
        <div className="container text-center">
          <h2 style={{ color: "#00ff7f" }}>Our Vision</h2> {/* Green heading */}
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
              loading="lazy"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                borderRadius: "8px",
                border: "2px solid #00ffaa", // Teal border
                transition: "box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0, 255, 170, 0.7)"; // Teal glow on hover
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
        style={{
          background: "linear-gradient(to bottom, #001a14, #000)", // Matching gradient
          color: "#00ffaa", // Teal text
        }}
      >
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#00ff7f" }}>
            Game Features
          </h2>
          <div className="row">
            {[
              { title: "Immersive Worlds", img: "img/home/immersive.jpg" },
              { title: "Customizable Avatars", img: "img/home/avatars.jpg" },
              { title: "Social Interaction", img: "img/home/social_.jpg" },
              { title: "Cross-Platform Play", img: "img/home/platforms.jpg" },
            ].map((feature, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <h3 style={{ color: "#00ffaa" }}>{feature.title}</h3>
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
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #00ffaa", // Teal border
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0, 255, 170, 0.7)"; // Teal glow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Call-to-Action Section */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <h2 style={{ color: "#00ff7f" }}>Be a Part of the Future</h2>{" "}
          {/* Green heading */}
          <p>
            Register now for exclusive early access to{" "}
            <strong style={{ color: "#00ffaa" }}>Fusion</strong> and join the
            journey before anyone else.
          </p>
          <a
            href="/pre-register"
            className="btn btn-dark"
            style={{
              backgroundColor: "#00ff7f", // Green button
              borderColor: "#00ffaa", // Teal border
              color: "#000", // Black text
              padding: "10px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00ffaa"; // Teal on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00ff7f"; // Back to green
            }}
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
