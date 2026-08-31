function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          FULL-STACK .NET DEVELOPER
        </p>

        <h1 className="hero__title">
          Building software
          <br />
          for real businesses
        </h1>

        <p className="hero__description">
          I design and develop reliable business systems, web applications,
          and digital solutions that simplify complex workflows and help
          businesses operate better.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__button hero__button--primary">
            View My Work
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__window">
          <div className="hero__window-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hero__code">
            <p>
              <span>const</span> developer = <strong>"Yazan"</strong>
            </p>

            <p>
              <span>const</span> experience = <strong>"7+ years"</strong>
            </p>

            <p>
              <span>const</span> focus = <strong>"Business Software"</strong>
            </p>

            <p>
              <span>const</span> stack = <strong>".NET + SQL + Web"</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero