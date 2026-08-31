import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo" onClick={closeMenu}>
        <img src="/PNG2Logo.png" alt="Yazan Abdelghani" />
      </a>

      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </div>

      <a
        href="#contact"
        className="navbar__cta"
        onClick={closeMenu}
      >
        Let's Talk
      </a>

      <button
        className="navbar__menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Let's Talk</a>
      </div>
    </nav>
  )
}

export default Navbar