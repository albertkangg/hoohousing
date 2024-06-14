// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import * as FaIcons from "react-icons/fa";
import Hamburger from "hamburger-react";
import Modal from "react-modal";
import Signup from "./pages/Signup";
import { SidebarData } from "./SidebarData";
import Signin from "./pages/Signin";

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    padding: '0',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showSidebar = () => setSidebar(!sidebar);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [loginOpened, setLoginOpened] = useState(false);
  const [signupOpened, setSignupOpened] = useState(false);

  const openModal = modalType => {
    if (modalType === "login") {
      setLoginOpened(true);
      setSignupOpened(false);
    } else if (modalType === "signup") {
      setLoginOpened(false);
      setSignupOpened(true);
    }
  };

  const closeModal = () => {
    setLoginOpened(false);
    setSignupOpened(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-hamburger">
            <Hamburger
              direction="left"
              size={20}
              color="orange"
              duration={0.1}
              toggle={showSidebar}
              toggled={sidebar}
            />
          </div>
          <div className="logo-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              HooHousing
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ManageRentals"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Manage Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/property"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add a Property
              </Link>
            </li>
            <li className="nav-item">
              <button className="sign-up" onClick={() => openModal("login")}>Login</button>
              <div className="slash">/</div>
              <button className="sign-in" onClick={() => openModal("signup")}>Signup</button>
            </li>
          </ul>
          <Modal isOpen={loginOpened} onRequestClose={closeModal} style={customStyles}>
            <Signin switchToSignup={() => openModal("signup")} onClose={closeModal} />
          </Modal>
          <Modal isOpen={signupOpened} onRequestClose={closeModal} style={customStyles}>
            <Signup switchToSignin={() => openModal("login")} onClose={closeModal} />
          </Modal>
        </div>
      </nav>
      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
