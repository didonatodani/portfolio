import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import inIcon from "../../assets/linkedin.svg";
import emailIcon from "../../assets/email.svg";

function Footer() {
  return (
    <footer>
      <small>Dani Di Donato © 2025 | Barcelona</small>
      <div className="contact-footer-div">
        <a href="https://www.linkedin.com/in/dani-di-donato-web-dev/">
          <img src={inIcon} alt="linkedin icon" />
        </a>
        <a href="https://github.com/didonatodani/">
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="mailto:didonatovdaniela@gmail.com">
          <img src={emailIcon} alt="email icon" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
