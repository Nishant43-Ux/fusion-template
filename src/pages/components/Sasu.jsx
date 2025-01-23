import "../../assets/css/sasu.css";

function Sasu() {
  return (
    <>
      {/* Unified Roadmap and Squad Section */}
      <section
        className="Unified_Section"
        style={{
          background: "linear-gradient(to bottom, #001a14, #000)", // Matching gradient
          color: "#00ffaa", // Teal text
          padding: "60px 0", // Unified padding
        }}
      >
        <div className="container">
          {/* Roadmap Section */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section_tittle text-center">
                <h2
                  className="roadmap_heading"
                  style={{ color: "#00ffaa" }} // Teal heading
                >
                  Our Game Development Roadmap
                </h2>
                <p
                  className="roadmap_subtitle"
                  style={{ color: "#00ff7f" }} // Green subtitle
                >
                  Embark on our journey as we conquer milestones, level by
                  level!
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div className="row roadmap_timeline mb-5">
            {/* Quarter 1 */}
            <div className="col-lg-6 mb-4">
              <div
                className="roadmap_item"
                style={{
                  backgroundColor: "#001a14", // Dark teal background
                  border: "2px solid #00ffaa", // Teal border
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#00ffaa" }}>Quarter 1</h3>{" "}
                {/* Teal heading */}
                <h4 style={{ color: "#00ff7f" }}>
                  🕹️ Dungeon Boss Defeated
                </h4>{" "}
                {/* Green subheading */}
                <p>
                  We fought the boss in the dungeon and acquired the ultimate
                  squad for our journey ahead.
                </p>
              </div>
            </div>

            {/* Quarter 2 */}
            <div className="col-lg-6 mb-4">
              <div
                className="roadmap_item"
                style={{
                  backgroundColor: "#001a14", // Dark teal background
                  border: "2px solid #00ffaa", // Teal border
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#00ffaa" }}>Quarter 2</h3>{" "}
                {/* Teal heading */}
                <h4 style={{ color: "#00ff7f" }}>🎨 Concept Art Quest</h4>{" "}
                {/* Green subheading */}
                <p>
                  Our alliance worked hard to complete the quest of concept art
                  collection, bringing our vision to life.
                </p>
              </div>
            </div>

            {/* Quarter 3 */}
            <div className="col-lg-6 mb-4">
              <div
                className="roadmap_item"
                style={{
                  backgroundColor: "#001a14", // Dark teal background
                  border: "2px solid #00ffaa", // Teal border
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#00ffaa" }}>Quarter 3</h3>{" "}
                {/* Teal heading */}
                <h4 style={{ color: "#00ff7f" }}>
                  🧙‍♂️ Coding Wizards Summoned
                </h4>{" "}
                {/* Green subheading */}
                <p>
                  We summoned coding wizards to develop the core mechanics and
                  gameplay features.
                </p>
              </div>
            </div>

            {/* Quarter 4 */}
            <div className="col-lg-6 mb-4">
              <div
                className="roadmap_item"
                style={{
                  backgroundColor: "#001a14", // Dark teal background
                  border: "2px solid #00ffaa", // Teal border
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#00ffaa" }}>Quarter 4</h3>{" "}
                {/* Teal heading */}
                <h4 style={{ color: "#00ff7f" }}>🚀 Beta Launch Ready</h4>{" "}
                {/* Green subheading */}
                <p>
                  After rigorous playtesting, we are ready to launch the beta
                  version for early adventurers!
                </p>
              </div>
            </div>
          </div>

          {/* Meet Our Squad Section */}
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <h2
                  className="team_heading"
                  style={{ color: "#00ffaa" }} // Teal heading
                >
                  Meet Our Squad
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p
                className="text-center team_description"
                style={{ color: "#00ff7f" }} // Green description
              >
                Our team is composed of highly skilled members, each with unique
                specialties. From fierce warriors who tackle challenges head-on
                to strategic minds that navigate complex puzzles, every member
                plays a crucial role in our journey.
              </p>
              <div className="text-center mt-4">
                <a
                  href="/team"
                  className="btn_explore_team"
                  style={{
                    backgroundColor: "#00ffaa", // Teal button background
                    color: "#000", // Black button text
                    border: "2px solid #00ff7f", // Green border
                    padding: "10px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Explore the Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sasu;
