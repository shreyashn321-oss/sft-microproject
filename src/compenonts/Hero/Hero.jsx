import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Effects */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-glow hero-glow-three"></div>

      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="hero-content">

          <div className="hero-badge">
            <span className="status-dot"></span>
            A Team of Creative Minds
          </div>

          <p className="hero-intro">
            WELCOME TO OUR SPACE
          </p>

          <h1>
            We Build
            <span> Together.</span>
          </h1>

          <h2>
            Creative Minds &{" "}
            <span>Future Developers</span>
          </h2>

          <p className="hero-description">
            We are a passionate team of developers and creators
            building modern digital experiences, innovative projects
            and creative solutions together.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary-btn"
            >
              Explore Our Work
              <span>↗</span>
            </a>

            <a
              href="#team"
              className="hero-btn secondary-btn"
            >
              Meet The Team
            </a>

          </div>

          <div className="hero-social-text">
            <span></span>
            Scroll to explore
            <span></span>
          </div>

        </div>

        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <div className="hero-visual">

          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="visual-card">

            {/* Code Window Header */}

            <div className="card-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            {/* Code */}

            <div className="code-content">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}

                <span className="code-white">
                  team
                </span>{" "}

                <span className="code-pink">
                  =
                </span>
              </p>

              <p className="code-indent">
                {"{"}
              </p>

              <p className="code-indent-two">
                <span className="code-purple">
                  name:
                </span>{" "}

                <span className="code-green">
                  "NEXORA"
                </span>
                ,
              </p>

              <p className="code-indent-two">
                <span className="code-purple">
                  members:
                </span>{" "}

                <span className="code-orange">
                  4
                </span>
                ,
              </p>

              <p className="code-indent-two">
                <span className="code-purple">
                  passion:
                </span>{" "}

                <span className="code-green">
                  "Innovation"
                </span>
                ,
              </p>

              <p className="code-indent-two">
                <span className="code-purple">
                  mission:
                </span>{" "}

                <span className="code-green">
                  "Build Something Great"
                </span>
              </p>

              <p className="code-indent">
                {"}"}
              </p>

              <p className="code-cursor">
                <span>_</span>
              </p>

            </div>

          </div>

          {/* Floating Tags */}

          <div className="floating-tag tag-one">
            <span>✦</span>
            Creative
          </div>

          <div className="floating-tag tag-two">
            <span>⌘</span>
            Teamwork
          </div>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="hero-bottom-line"></div>

    </section>
  );
}

export default Hero;