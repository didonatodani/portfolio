import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import inIcon from "../../assets/linkedin.svg";
import emailIcon from "../../assets/email.svg";

function Footer() {
  return (
    <footer>
      <small>Dani Di Donato © 2025 | Barcelona</small>
      <div className="contact-footer-div" target="_blank">
        <a href="https://www.linkedin.com/in/dani-di-donato-web-dev/" target="_blank">
          <img src={inIcon} alt="linkedin icon" className="icon"/>
        </a>
        <a href="https://github.com/didonatodani/" target="_blank">
          <img src={githubIcon} alt="github icon"className="icon"/>
        </a>
        <a href="mailto:didonatovdaniela@gmail.com" target="_blank">
          <img src={emailIcon} alt="email icon" className="icon" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
