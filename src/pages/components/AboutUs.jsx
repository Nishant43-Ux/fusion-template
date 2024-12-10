function AboutUs() {
  return (
    <>
      {/* Introduction Section */}
      <section className="about_us section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-6 col-xl-6">
              <div className="learning_img">
                <img src="img/about_img.png" alt="IceShard Games" />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="about_us_text">
                <h2>Shaping the Future of Immersive Entertainment</h2>
                <p>
                  At <strong>IceShard Games Private Limited</strong>, we are
                  dedicated to bridging the gap between gaming, education, and
                  virtual reality. Our mission is to create experiences that
                  inspire, connect, and engage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision section_padding">
        <div className="container text-center">
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology and creativity merge
            seamlessly, offering players not just games but virtual realms where
            they can explore, learn, and socialize like never before.
          </p>
          <div className="vision_img">
            <img
              src="img/vision_img.png"
              alt="Our Vision"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our_story section_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="story_img">
                <img
                  src="img/story_img.png"
                  alt="Our Story"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2>Our Story</h2>
              <p>
                Born from a passion for innovation and storytelling, IceShard
                Games began its journey with a dream to redefine what’s possible
                in virtual reality and gaming. From small beginnings to big
                ambitions, we’ve committed ourselves to creating groundbreaking
                experiences that resonate with players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="game_features section_padding">
        <div className="container">
          <h2 className="text-center mb-5">Game Features</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3>Immersive Worlds</h3>
              <p>
                Step into expansive, beautifully crafted worlds where every
                detail captivates your imagination.
              </p>
              <img
                src="img/immersive_worlds.png"
                alt="Immersive Worlds"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3>Customizable Avatars</h3>
              <p>
                Express yourself with highly customizable avatars using our
                advanced MetaHuman integration.
              </p>
              <img
                src="img/custom_avatars.png"
                alt="Customizable Avatars"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3>Social Interaction</h3>
              <p>
                Connect with friends, join guilds, or make new companions in a
                socially rich world.
              </p>
              <img
                src="img/social_interaction.png"
                alt="Social Interaction"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3>Cross-Platform Play</h3>
              <p>
                Seamless gameplay across PC, VR, and mobile ensures you are
                always part of the action.
              </p>
              <img
                src="img/cross_platform.png"
                alt="Cross-Platform Play"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why_choose_us section_padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3>Innovation at Its Core</h3>
              <p>
                We create ecosystems that redefine how people interact with
                virtual environments.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3>A Passion for Quality</h3>
              <p>
                Our team delivers high-quality experiences with stunning
                graphics and flawless gameplay.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3>Community-Driven Development</h3>
              <p>
                We listen to our players and incorporate their feedback into
                every update.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3>Global Impact</h3>
              <p>
                Our projects entertain, educate, and inspire players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta section_padding text-center">
        <div className="container">
          <h2>Be a Part of the Future</h2>
          <p>
            Register now for exclusive early access to <strong>Fusion</strong>{" "}
            and join the journey before anyone else.
          </p>
          <a href="#" className="btn_1">
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
