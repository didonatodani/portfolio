import "./Header.css";
import { useState, useEffect } from "react";

import Logo from "../../assets/logo.jpeg";
import MenuIcon from "../../assets/menu.svg";
import Sidebar from "../Sidebar/Sidebar";
// import CloseMenuIcon from "../../assets/close.png"

function Header() {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  function closeMenu() {
    if (window.innerWidth < 768) {
      setShowMenuButton(true);
      setShowSidebar(false);
      setShowCloseButton(false);
    }else return
  }

  function showMenu() {
    setShowMenuButton(false);
    setShowCloseButton(true);
    setShowSidebar(true);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setShowSidebar(true);
        setShowMenuButton(false);
        setShowCloseButton(false);
      } else {
        setShowSidebar(false);
        setShowMenuButton(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-holder">
      <header className="header">
        <a href="#hello-section">
          <img src={Logo} alt="logo image" className="logo" />
        </a>
        {showMenuButton && (
          <img
            src={MenuIcon}
            alt="menu icon"
            className="menu icon"
            onClick={() => {
              showMenu();
            }}
          />
        )}

        {showSidebar && (
          <Sidebar showCloseButton={showCloseButton} closeMenu={closeMenu} />
        )}
      </header>
    </div>
  );
}
export default Header;
