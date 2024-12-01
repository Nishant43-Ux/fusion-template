

function AboutUs() {
  return (
    <>
      {/* about_us part start*/}
      <section className="about_us section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-6 col-xl-6">
              <div className="learning_img">
                <img src="img/about_img.png" alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="about_us_text">
                <h2>Find out about us in history</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <a href="#" className="btn_1">
                  Install Now
                </a>
                <a href="#" className="btn_1">
                  Watch Tutorial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about_us part end*/}
    </>
  );
}

export default AboutUs