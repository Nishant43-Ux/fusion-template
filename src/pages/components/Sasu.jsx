import "../../assets/css/sasu.css"; 


function Sasu() {
  return (
    <>
      {/* Roadmap Section */}
      <section className="Roadmap_Section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section_tittle text-center text-white">
                <h2 className="roadmap_heading">
                  Our Game Development Roadmap
                </h2>
                <p className="roadmap_subtitle">
                  Embark on our journey as we conquer milestones, level by
                  level!
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div className="row roadmap_timeline">
            {/* Quarter 1 */}
            <div className="col-lg-6 mb-4">
              <div className="roadmap_item blood_glow">
                <h3>Quarter 1</h3>
                <h4>🕹️ Dungeon Boss Defeated</h4>
                <p>
                  We fought the boss in the dungeon and acquired the ultimate
                  squad for our journey ahead.
                </p>
              </div>
            </div>

            {/* Quarter 2 */}
            <div className="col-lg-6 mb-4">
              <div className="roadmap_item blood_glow">
                <h3>Quarter 2</h3>
                <h4>🎨 Concept Art Quest</h4>
                <p>
                  Our alliance worked hard to complete the quest of concept art
                  collection, bringing our vision to life.
                </p>
              </div>
            </div>

            {/* Quarter 3 */}
            <div className="col-lg-6 mb-4">
              <div className="roadmap_item blood_glow">
                <h3>Quarter 3</h3>
                <h4>🧙‍♂️ Coding Wizards Summoned</h4>
                <p>
                  We summoned coding wizards to develop the core mechanics and
                  gameplay features.
                </p>
              </div>
            </div>

            {/* Quarter 4 */}
            <div className="col-lg-6 mb-4">
              <div className="roadmap_item blood_glow">
                <h3>Quarter 4</h3>
                <h4>🚀 Beta Launch Ready</h4>
                <p>
                  After rigorous playtesting, we are ready to launch the beta
                  version for early adventurers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Squad Section */}
      <section className="gallery_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center text-white">
                <h2 className="team_heading">Meet Our Squad</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="text-center text-white team_description">
                Our team is composed of highly skilled members, each with unique
                specialties. From fierce warriors who tackle challenges head-on
                to strategic minds that navigate complex puzzles, every member
                plays a crucial role in our journey.
              </p>
              <div className="text-center mt-4">
                <a href="/team" className="btn_explore_team">
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
