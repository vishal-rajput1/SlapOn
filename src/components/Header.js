import React from "react";
// import "./Header.css";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>
        {/* MARQUEE */}
      <div className="header-marquee">
        <marquee behavior="scroll" direction="left">
          🎶 Big Sale on DJ Gear! Get up to 50% off on mixers, controllers, and more 🎶
        </marquee>
      </div>

      {/* TOP HEADER */}
      <div className="header-top">

        <div className="logo">
          Slap On
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search for DJ Gear..." />
        </div>

        <div className="header-icons">
          <FaUser />
          <FaHeart />
          <FaShoppingCart />
        </div>

      </div>


      {/* NAVBAR */}
      <nav className="navbar">

        <a href="#">Guitars</a>
        <a href="#">Ukuleles & Violins</a>
        <a href="#">Keyboards & Pianos</a>
        <a href="#">Studio & Recording</a>
        <a href="#">Drums & Percussion</a>
        <a href="#">Software & Plugins</a>
        <a href="#">Other</a>
        <a href="#" className="deal">Deals</a>
        <a href="#">More</a>

      </nav>

    </header>
  );
}

export default Header;