import "./Sidebar.css";
import CloseIcon from "../../assets/close.svg";
import { useState } from "react";

function Sidebar({ showCloseButton, closeMenu }) {
  const [activeLink, setActiveLink] = useState("");

  function handleClick(sectionId) {
    setActiveLink(sectionId);
    closeMenu();
  }

  return (
    <aside>
      {showCloseButton && (
        <img
          src={CloseIcon}
          alt="close menu icon"
          className="close-icon"
          onClick={() => {
            closeMenu();
          }}
        />
      )}

      <div className="guide-line">
        <a
          href="#hello-section"
          onClick={() => {
            closeMenu();
            handleClick("hello-section");
          }}
        >
          <span className={`ref-span ${activeLink === "hello-section" ? "active" : ""}`}>Hi!</span>
        </a>
        <a
          href="#contact-section"
          onClick={() => {
            closeMenu();
            handleClick("contact-section");
          }}
        >
          <span className={`ref-span ${activeLink === "contact-section" ? "active" : ""}`}>Contact</span>
        </a>
        <a
          href="#stack-section"
          onClick={() => {
            closeMenu();
            handleClick("stack-section");
          }}
        >
          <span className={`ref-span ${activeLink === "stack-section" ? "active" : ""}`}>Tech Stack</span>
        </a>
        <a
          href="#projects-section"
          onClick={() => {
            closeMenu();
            handleClick("projects-section");
          }}
        >
          <span className={`ref-span ${activeLink === "projects-section" ? "active" : ""}`}>Projects</span>
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
