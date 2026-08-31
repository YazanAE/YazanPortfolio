function Experience() {
  const experiences = [
  {
    period: 'Mar 2018 — Present',
    role: 'Freelance Software Developer',
    company: 'Independent',
    description:
      'Designing and developing custom business systems, managing the full software lifecycle from requirements and architecture to deployment, training, and support.',
  },
  {
    period: 'Feb 2024 — Nov 2024',
    role: 'Accountant',
    company: 'Asha Company Stores',
    description:
      'Managed accounting operations, financial records, transactions, and reporting while gaining practical experience in business and financial workflows.',
  },
  {
    period: 'Jun 2020 — Mar 2022',
    role: 'Fuel Station Manager',
    company: 'Shini Group Co.',
    description:
      'Managed daily operations, administrative activities, financial reporting, employee shifts, IT systems, and external service providers.',
  },
  {
    period: 'Feb 2017 — Apr 2018',
    role: 'IT Administrator',
    company: 'Shini Group Co.',
    description:
      'Maintained IT infrastructure, developed internal applications and websites, provided technical support, and coordinated IT services across branches.',
  },
  {
    period: 'Jun 2015 — Jan 2017',
    role: 'App Developer',
    company: 'Insight IT Solutions',
    description:
      'Developed desktop applications, responsive websites, and dynamic reports using Microsoft technologies.',
  },
]

  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header">
          <p className="section__eyebrow">EXPERIENCE</p>

          <h2 className="experience__title">
            A career built around technology and business
          </h2>
        </div>

        <div className="experience__list">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={`${experience.role}-${experience.company}`}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__content">
                <h3>{experience.role}</h3>
                <p className="experience__company">
                  {experience.company}
                </p>

                <p className="experience__description">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience