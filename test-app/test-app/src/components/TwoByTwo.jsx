// src/TwoByTwo.jsx
import React from 'react';
import './TwoByTwo.css';  // Import a separate CSS file for this component
import { Link } from 'react-router-dom';

function TwoByTwo() {
  return (
    <div className="twoByTwo">
      <header className="twoByTwo-header">
        <h1>The Perfect Place to Manage Your Property</h1>
        <p>Work with the best suite of property management tools on the market.</p>
      </header>
      <div className="content">
        <div className="card">
          <img src="../images/housing-image-1.jpg" alt="Advertise Your Rental" />
        </div>
        <div className="card">
            <div className="card-content">
                <h2>Advertise Your Rental</h2>
                <p>Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform.</p>
                <Link to="/property">List Your Property</Link>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <h2>Lease 100% Online</h2>
                <p>Accept applications, process rent payments online, and sign digital leases all powered on a single platform.</p>
                <Link to='ManageRentals'>Manage Your Property</Link>
            </div>
        </div>
        <div className="card">
          <img src="../images/housing-image-2.jpg" alt="Lease 100% Online" />
        </div>
      </div>
    </div>
  );
}

export default TwoByTwo;
