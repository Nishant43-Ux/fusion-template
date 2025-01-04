import "../assets/css/Team.css";

function Team() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <div className="body_bg">
        {/* Breadcrumb */}
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_iner text-center">
                  <div className="breadcrumb_iner_item">
                    <h2>Our Factions</h2>
                    <p>
                      Discover the guilds that power our game universe! ⚔️🛡️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Factions Section */}
        <section className="team_factions padding_top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section_tittle text-center">
                  <h2>Meet the Team</h2>
                  <p>
                    Each member belongs to a unique faction, bringing their own
                    skills and spirit to the world of gaming! 🕹️💥
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Founder/CEO */}
              <div className="col-md-4">
                <div className="faction_card text-center faction_lead">
                  <img
                    src="img/Team/ceo.jpg"
                    alt="Nishant Latiyal"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Nishant Latiyal</h4>
                  <p className="role">Founder/CEO</p>
                  <p className="faction_name">Faction: The Overseers 👁️‍🗨️</p>
                  <p className="faction_description">
                    Masters of strategy and vision, the Overseers keep the grand
                    plan in motion.
                  </p>
                </div>
              </div>

              {/* Co-founder/CFO */}
              <div className="col-md-4">
                <div className="faction_card text-center faction_lead">
                  <img
                    src="img/Team/ayush_saini.jpg"
                    alt="Ayush Saini"
                    loading="lazy"
                    className="team_img"
                  />
                  <h4>Ayush Saini</h4>
                  <p className="role">Co-founder/CFO</p>
                  <p className="faction_name">Faction: The Overseers 👁️‍🗨️</p>
                  <p className="faction_description">
                    Keeping resources balanced and the treasury secure.
                  </p>
                </div>
              </div>

              {/* CMO */}
              <div className="col-md-4">
                <div className="faction_card faction_marketing text-center">
                  <img
                    src="img/Team/shaswat.jpg"
                    alt="Shashwat"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Shashwat</h4>
                  <p className="role">CMO</p>
                  <p className="faction_name">
                    Faction: Marketing Maestros 🎯📢
                  </p>
                  <p className="faction_description">
                    Spreading the word and rallying the troops for victory!
                  </p>
                </div>
              </div>

              {/* Senior Graphic Designer */}
              {/* <div className="col-md-4">
                <div className="faction_card text-center faction_design">
                  <img
                    src="img/Team/khwaish.jpg"
                    alt="Khwaish Verma"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Khwaish Verma</h4>
                  <p className="role">Senior Graphic Designer</p>
                  <p className="faction_name">Faction: Visual Crusaders 🎨🖌️</p>
                  <p className="faction_description">
                    Creating stunning visuals to dazzle and inspire.
                  </p>
                </div>
              </div> */}

              {/* Senior Concept Artist */}
              <div className="col-md-4">
                <div className="faction_card text-center faction_design">
                  <img
                    src="img/Team/pranav.jpg"
                    alt="Pranav Kapoor"
                    loading="lazy"
                    className="team_img"
                  />
                  <h4>Pranav Kapoor</h4>
                  <p className="role">Senior Concept Artist</p>
                  <p className="faction_name">
                    Faction: Visionary Artists 🖼️🔮
                  </p>
                  <p className="faction_description">
                    Bringing ideas to life with creative magic.
                  </p>
                </div>
              </div>

              {/* VR/AR Specialist */}
              <div className="col-md-4">
                <div className="faction_card text-center faction_art">
                  <img
                    src="img/Team/aryan.jpg"
                    alt="Aryan"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Aryan</h4>
                  <p className="role">VR/AR Specialist</p>
                  <p className="faction_name">Faction: Virtual Vanguard 🕶️🌐</p>
                  <p className="faction_description">
                    Crafting immersive worlds beyond imagination.
                  </p>
                </div>
              </div>

              {/* Full-Stack Developer */}
              <div className="col-md-4">
                <div className="faction_card faction_tech text-center">
                  <img
                    src="img/Team/Ayush_1.jpg"
                    alt="Ayush Pahuja"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Ayush Pahuja</h4>
                  <p className="role">Full-Stack Developer</p>
                  <p className="faction_name">Faction: Code Warriors 💻⚔️</p>
                  <p className="faction_description">
                    Building the backbone of our digital realm.
                  </p>
                </div>
              </div>

              {/* Editor/Manager */}
              <div className="col-md-4">
                <div className="faction_card text-center faction_content">
                  <img
                    src="img/Team/parth.jpg"
                    alt="Parth Latta"
                    className="team_img"
                    loading="lazy"
                  />
                  <h4>Parth Latta</h4>
                  <p className="role">Editor/Manager</p>
                  <p className="faction_name">
                    Faction: Content Craftsmen ✍️📜
                  </p>
                  <p className="faction_description">
                    Shaping stories and managing content with precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Team;
