import React from "react";
import "../App.css";
import logo from "../assets/logo.jpg"; // Pastikan path ini benar

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo" className="app-logo" />{" "}
      {/* Gunakan logo di sini */}
      <h1>Smart Buyer</h1>
    </header>
  );
};

export default Header;
