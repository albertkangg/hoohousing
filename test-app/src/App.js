import React, { useState } from 'react';
import "./App.css";
import Home from "./components/pages/Home";
import Rentals from "./components/pages/Rentals";
import Signup from "./components/pages/Signup";
import Property from "./components/pages/Property";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ManageRentals" element={<Rentals />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Property" element={<Property />} />
        </Routes>
    </Router>
    

  );
}

export default App;
