// Modal.js
import React, { useEffect, useState } from 'react';
import "../../App.css";
import "../Navbar.css";

function Modal({ children, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match the CSS transition duration
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
