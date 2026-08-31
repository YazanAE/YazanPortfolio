function Skills() {
  const skills = [
    {
      category: 'Development',
      items: ['C#', '.NET', 'ASP.NET Core', 'WPF', 'Windows Forms'],
    },
    {
      category: 'Web',
      items: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Responsive Design'],
    },
    {
      category: 'Data',
      items: ['SQL Server', 'MongoDB', 'Database Design', 'Reporting'],
    },
    {
      category: 'Tools & APIs',
      items: ['Git', 'REST APIs', 'Visual Studio', 'Power BI', 'AI Integration'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header">
          <p className="section__eyebrow">SKILLS</p>

          <h2 className="skills__title">
            Technologies I use to build reliable software
          </h2>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__group" key={skill.category}>
              <h3>{skill.category}</h3>

              <div className="skills__items">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills