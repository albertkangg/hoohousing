import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Property from "./components/pages/Property";
import Rentals from "./components/pages/Rentals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </Router>
  );
}

export default App;
