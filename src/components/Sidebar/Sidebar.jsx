import "./Sidebar.css";
import CloseIcon from "../../assets/close.svg";

function Sidebar({ showCloseButton, closeMenu }) {
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
          }}
        >
          <span className="ref-span">Hi!</span>
        </a>
        <a
          href="#contact-section"
          onClick={() => {
            closeMenu();
          }}
        >
          <span className="ref-span">Contact</span>
        </a>
        <a
          href="#stack-section"
          onClick={() => {
            closeMenu();
          }}
        >
          <span className="ref-span">Tech Stack</span>
        </a>
        <a
          href="#projects-section"
          onClick={() => {
            closeMenu();
          }}
        >
          <span className="ref-span">Projects</span>
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
