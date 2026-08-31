function Projects() {
  const projects = [
    {
      number: '01',
      name: 'Deal Easy',
      category: 'Poultry Management',
      description:
        'A complete management system for poultry farms covering operations, inventory, sales, purchases, financial workflows, and reporting.',
      stack: ['C#', '.NET', 'SQL Server', 'Windows Forms'],
      featured: true,
     link: 'https://github.com/YazanAE/Deal-Easy-Poultry-Farm-Management-System',
    },
    {
      number: '02',
      name: 'Rovan',
      category: 'Pharmacy Management',
      description:
        'A business management system designed for pharmacy operations and daily workflow management.',
      stack: ['C#', '.NET', 'SQL Server'],
      featured: true,
    },
    {
      number: '03',
      name: 'Jacked Systems',
      category: 'Fitness Club Management',
      description:
        'A management solution built to organize fitness club operations, members, and daily business workflows.',
      stack: ['C#', '.NET', 'SQL Server'],
      featured: true,
    },
    {
      number: '04',
      name: 'Deal Easy Store',
      category: 'Commercial Store',
      description:
        'A business management system for large-scale retail operations.',
      stack: ['C#', 'SQL Server'],
    },
    {
      number: '05',
      name: 'Deal Easy Dental',
      category: 'Dental Clinic',
      description:
        'A specialized management system for dental clinic operations.',
      stack: ['C#', 'WPF', 'SQL Server'],
    },
    {
      number: '06',
      name: 'Deal Easy Plant Nursery',
      category: 'Plant Nursery',
      description:
        'A management solution designed for plant nursery operations.',
      stack: ['C#', 'WPF', 'SQL Server'],
    },
    {
      number: '07',
      name: 'Aser',
      category: 'Debt Collection',
      description:
        'A lightweight solution for organizing and tracking debt collection.',
      stack: ['C#', 'SQL Server'],
    },
    {
      number: '08',
      name: 'Al-Zain',
      category: 'Sales Representatives',
      description:
        'A customer capture and sales support solution designed around field representatives.',
      stack: ['C#', 'SQL Server'],
    },
    {
      number: '09',
      name: 'Profit Tracker',
      category: 'Excel Solution',
      description:
        'A lightweight financial tracking solution built with Excel.',
      stack: ['Excel'],
    },
    {
      number: '10',
      name: 'Hours.ps',
      category: 'Web Application',
      description:
        'A web-based digital solution.',
      stack: ['Web'],
    },
    {
      number: '11',
      name: 'Job Site',
      category: 'Web Application',
      description:
        'A web platform designed around job and employment workflows.',
      stack: ['Web'],
    },
    {
      number: '12',
      name: 'Dulcet',
      category: 'Website',
      description:
        'A custom website solution.',
      stack: ['Web'],
    },
    {
      number: '13',
      name: 'AlNajaarPC',
      category: 'Desktop & Mobile',
      description:
        'A business system accompanied by a mobile application.',
      stack: ['C#', 'Mobile'],
    },
  ]

  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  const otherProjects = projects.filter(
    (project) => !project.featured
  )

  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        <div className="projects__header">
          <div>
            <p className="section__eyebrow">SELECTED WORK</p>

            <h2 className="projects__title">
  Software built for <span>real-world</span> businesses
</h2>
          </div>

          <p className="projects__intro">
            A selection of business systems, applications, and digital
            solutions developed across different industries.
          </p>
        </div>

        <div className="projects__featured">
          {featuredProjects.map((project) => (
            <article
              className="project project--featured"
              key={project.number}
            >
              <div className="project__preview">
                <div className="project__window">

                  <div className="project__window-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="project__placeholder">
                    <span>{project.name}</span>
                    <strong>{project.category}</strong>
                  </div>

                </div>
              </div>

              <div className="project__content">

                <p className="project__number">
                  {project.number}
                </p>

                <h3 className="project__name">
                  {project.name}
                </h3>

                <p className="project__category">
                  {project.category}
                </p>

                <p className="project__description">
                  {project.description}
                </p>

                <div className="project__stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project__actions">
                  <a
  href={project.link}
  target="_blank"
  rel="noreferrer"
  className="project__link"
>
  View Project →
</a>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="projects__grid">
          {otherProjects.map((project) => (
            <article
              className="project__card"
              key={project.number}
            >
              <p className="project__card-number">
                {project.number}
              </p>

              <h3>{project.name}</h3>

              <p className="project__card-category">
                {project.category}
              </p>

              <p className="project__card-description">
                {project.description}
              </p>

              <div className="project__stack">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects