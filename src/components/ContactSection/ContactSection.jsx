import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact-section">
      <p className="contact-description">
        Hey there! It's Dani here, a creative web dev passionate about building
        efficient and user-friendly applications. <span id="description-span">Let's make something great!</span>
      </p>
      <div className="contact-section-links">
        <a href="mailto:didonatovdaniela@gmail.com">Email
        </a>
        <a
          href="https://www.linkedin.com/in/dani-di-donato-web-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/didonatodani/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="/DDDV.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-link"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
