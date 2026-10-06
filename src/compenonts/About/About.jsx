import "./About.css";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Creative Thinking",
      text: "We turn ideas into meaningful and engaging digital experiences.",
    },
    {
      number: "02",
      title: "Modern Development",
      text: "We explore modern technologies to build clean and responsive applications.",
    },
    {
      number: "03",
      title: "Problem Solving",
      text: "We enjoy solving real-world problems through technology and innovation.",
    },
    {
      number: "04",
      title: "Team Collaboration",
      text: "Different skills, different perspectives, one team working toward one goal.",
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* Background */}

      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="about-header">

          <span className="about-label">
            ABOUT US
          </span>

          <h2>
            More Than Just
            <span> A Team.</span>
          </h2>

          <p>
            We are a group of passionate college students who love
            technology, creativity and building things that make
            an impact.
          </p>

        </div>

        {/* =========================
            MAIN INTRO
        ========================= */}

        <div className="about-intro">

          <div className="about-intro-left">

            <span className="intro-number">
              04
            </span>

            <span className="intro-small">
              MINDS
            </span>

          </div>

          <div className="about-intro-content">

            <h3>
              Different Skills.
              <br />
              <span>One Vision.</span>
            </h3>

            <p>
              Every member of our team brings something different
              to the table. From development and design to
              problem-solving and creative thinking, we combine
              our strengths to create projects we are proud of.
            </p>

            <p>
              This portfolio is a small representation of our
              journey, our experiments and the things we are
              learning along the way.
            </p>

          </div>

        </div>

        {/* =========================
            HIGHLIGHTS
        ========================= */}

        <div className="about-highlights">

          {highlights.map((item) => (
            <div
              className="highlight-card"
              key={item.number}
            >

              <div className="highlight-top">

                <span className="highlight-number">
                  {item.number}
                </span>

                <span className="highlight-arrow">
                  ↗
                </span>

              </div>

              <div className="highlight-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <div className="about-bottom">

          <span></span>

          <p>
            BUILDING • LEARNING • CREATING • GROWING
          </p>

          <span></span>

        </div>

      </div>

    </section>
  );
}

export default About;