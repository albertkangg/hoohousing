import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import Modal from './pages/Modal';
import Signup from "./pages/Signup";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HooHousing
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
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
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up/Sign In
              </Link>
            </li>
          </ul>
          <button onClick={openModal}>Sign Up</button>
          {showModal && (
          <Modal onClose={closeModal}>
            <Signup onClose={closeModal} />
          </Modal>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
