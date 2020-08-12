import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
  // console.log("Nav bar log");
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    console.log("toggled");
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log("Dark mode is: ", darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
