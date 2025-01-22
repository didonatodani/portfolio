function ContactSection() {
  return (
    <section id="contact-section">
      <a href="mailto:didonatovdaniela@gmail.com">email me</a>
      <a
        href="https://www.linkedin.com/in/dani-di-donato-web-dev/"
        target="_blank"
        className="contact-link"
      >
        Linkedin
      </a>
      <a
        href="https://github.com/didonatodani/"
        target="_blank"
        className="contact-link"
      >
        GitHub
      </a>
      <a
        href="../../public\DDDV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <button className="contact-btn">Resume</button>
      </a>
    </section>
  );
}

export default ContactSection;
