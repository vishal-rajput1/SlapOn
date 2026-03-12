import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import theme from "../theme/theme";
import logo from "../logo.png";
import CategoryNav from "./CategorieNav";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full shadow-sm">

      {/* MARQUEE BAR */}
      <div
  className="text-white text-xs md:text-sm py-2"
  style={{ background: theme.colors.accent }}
>
  <marquee>
    <span className="mx-6">🎧 All Scratch DJs from India trust SLAP ON!</span>
    <span className="mx-6">Authentic DJ Gear</span>
    <span className="mx-6">Premium Deck Skins</span>
    <span className="mx-6">Fast Shipping Across India</span>
    <span className="mx-6">CDJ Accessories Available</span>
      <span className="mx-6">Premium Quality Mixer</span>
  </marquee>
</div>
      {/* MAIN HEADER */}
      <div
        className="flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: theme.colors.card }}
      >

        {/* LEFT MENU */}
        <div className="flex items-center gap-6">
          <FaBars
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          />

          <a href="#" className="hidden md:block text-sm">
            Products
          </a>
          <a href="#" className="hidden md:block text-sm">
            Gallery
          </a>
          <a href="#" className="hidden md:block text-sm">
            About
          </a>
        </div>

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-10" alt="logo" />
          <span
            className="font-bold tracking-[4px] text-xl"
            style={{ color: theme.colors.text }}
          >
            SLAP <span style={{ color: theme.colors.accent }}>ON!</span>
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* SEARCH */}
          <div
            className="hidden md:flex items-center border rounded-full px-4 py-2 w-[300px]"
            style={{ borderColor: theme.colors.border }}
          >
            <input
              type="text"
              placeholder="Search DJ gear..."
              className="flex-1 outline-none text-sm"
            />
            <FaSearch style={{ color: theme.colors.textLight }} />
          </div>

          <FaUser className="text-lg cursor-pointer" />

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-lg" />
            <span
              className="absolute -top-2 -right-2 text-xs px-1 rounded-full text-white"
              style={{ background: theme.colors.danger }}
            >
              3
            </span>
          </div>

        </div>
      </div>
      
    <CategoryNav/>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm">
          <a href="#">Products</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;