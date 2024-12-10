import { useNavigate } from "react-router-dom";
import "../assets/css/fusion.css"; 

function Fighter() {
  const navigate = useNavigate();

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div
        className="body_bg"
        style={{
          color: "white",
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        {/* Hero Section */}
        <section
          className="hero_section fade-in"
          style={{
            backgroundImage: "url('img/gallery/gallery_item_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 0",
          }}
        >
          <div className="container text-center">
            <h1
              style={{
                fontSize: "54px",
                color: "red",
                textShadow: "2px 2px 4px black",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Fusion: Redefine Gaming
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "white",
                margin: "20px 0",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Dive into the immersive universe of Fusion, where imagination and
              technology collide.
            </p>
            <button
              className="btn btn-danger hover-scale"
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                marginTop: "20px",
              }}
              onClick={() => navigate("/pre-register")}
            >
              Pre-Register Now
            </button>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="mission_statement section_padding fade-in">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2
                  style={{
                    fontSize: "46px",
                    color: "red",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Mission Statement
                </h2>
                <ul
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  <li>
                    <strong>Empowering Creativity, Inspiring Adventure:</strong>{" "}
                    Tools to create, explore, and connect in limitless virtual
                    worlds.
                  </li>
                  <li>
                    <strong>Building Bridges:</strong> Redefining entertainment
                    through immersive storytelling and cutting-edge technology.
                  </li>
                  <li>
                    <strong>Shaping the Future:</strong> Innovating virtual
                    worlds with passion and collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Images Section */}
        <section className="featured_images section_padding fade-in">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2
                  style={{
                    fontSize: "36px",
                    color: "red",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Discover the Worlds of Fusion
                </h2>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Explore breathtaking environments and epic challenges.
                </p>
              </div>
            </div>
            <div className="row">
              {/* Image Cards */}
              {[...Array(6)].map((_, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div
                    className="image_card hover-zoom"
                    style={{
                      backgroundImage: `url('img/gallery/gallery_item_${
                        idx + 1
                      }.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      <h3 style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Epic World {idx + 1}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials section_padding fade-in">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2
                  style={{
                    fontSize: "46px",
                    color: "red",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  What Players Say
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 text-center">
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  “Fusion isn’t just a game; it’s a world where you can live out
                  your dreams.” – Beta Tester
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  “Fusion has brought my friends and me closer than ever.” –
                  Gamer and Streamer
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  “The future of gaming is here, and it’s called Fusion.” – Game
                  Reviewer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="cta_section moving-background"
          style={{
            backgroundImage: "url('img/gallery/gallery_item_5.png')",
            backgroundSize: "cover",
            padding: "100px 0",
          }}
        >
          <div className="container text-center">
            <h2
              style={{
                fontSize: "36px",
                color: "red",
                textShadow: "2px 2px 4px black",
                marginBottom: "20px",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Ready to Join the Revolution?
            </h2>
            <button
              className="btn btn-danger hover-scale"
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "red",
                border: "none",
              }}
              onClick={() => navigate("/pre-register")}
            >
              Pre-Register Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Fighter;
