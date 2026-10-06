import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's build
            <span> something.</span>
          </h2>

          <p>
            Have an idea, project or just want to connect?
            We'd love to hear from you.
          </p>

        </div>

        {/* CONTACT CONTENT */}

        <div className="contact-grid">

          {/* LEFT CARD */}

          <div className="contact-main-card">

            <span className="contact-small-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's turn your
              <span> idea into reality.</span>
            </h3>

            <p>
              Whether it's a website, application or a creative
              idea, our team is always excited to work on something
              new.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="contact-email-btn"
            >
              <span>Start a conversation</span>
              <span className="contact-arrow">↗</span>
            </a>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-links">

            {/* GITHUB */}

            <a
              href="https://github.com/shreyashn321-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >

              <div className="contact-icon">
                GH
              </div>

              <div className="contact-link-info">

                <span>
                  GITHUB
                </span>

                <strong>
                  Explore our work
                </strong>

              </div>

              <span className="contact-link-arrow">
                ↗
              </span>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/shreyash-naik-809317428/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >

              <div className="contact-icon">
                IN
              </div>

              <div className="contact-link-info">

                <span>
                  LinkedIn
                </span>

                <strong>
                  Connect with us
                </strong>

              </div>

              <span className="contact-link-arrow">
                ↗
              </span>

            </a>

            {/* EMAIL */}

            <a
              href="mailto:shreyashn321@gmail.com"
              className="contact-link-card"
            >

              <div className="contact-icon">
                @
              </div>

              <div className="contact-link-info">

                <span>
                  EMAIL
                </span>

                <strong>
                  shreyashn321@gmail.com
                </strong>

              </div>

              <span className="contact-link-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>

        {/* FOOTER TEXT */}

        <div className="contact-bottom">

          <span>
            MADE WITH
          </span>

          <strong>
            PASSION
          </strong>

          <span>
            BY OUR TEAM
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;