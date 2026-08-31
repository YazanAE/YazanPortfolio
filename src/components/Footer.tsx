function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__brand">
          Yazan Abdelghani
        </p>

        <p className="footer__copy">
          © {new Date().getFullYear()} Yazan Abdelghani. All rights reserved.
        </p>

        <a href="#hero" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer