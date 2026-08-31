function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__content">
          <p className="section__eyebrow">ABOUT ME</p>

          <h2 className="about__title">
            Software development
            <br />
            with a business mindset
          </h2>

          <p className="about__text">
            I'm a Full-Stack .NET Developer with 7+ years of experience
            building software for real-world businesses.
          </p>

          <p className="about__text">
            My experience goes beyond writing code. I've worked closely
            with business operations, accounting, management, and
            day-to-day workflows — which helps me understand what a
            business actually needs before turning those needs into
            software.
          </p>

          <p className="about__text">
            From desktop management systems to web applications and
            custom business solutions, I focus on building software
            that is practical, reliable, and easy to use.
          </p>
        </div>

        <div className="about__stats">
          <div className="about__stat">
            <strong>7+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="about__stat">
            <strong>2018</strong>
            <span>Freelancing Since</span>
          </div>

          <div className="about__stat">
            <strong>20+</strong>
            <span>Projects &amp; Solutions</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About