import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import theme from "../theme/theme";

function Footer() {
  return (
    <footer
      className="mt-20 text-sm"
      style={{ background: theme.colors.accent, color: "#fff" }}
    >

      {/* TOP */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h3 className="font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Product Info</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>Info & FAQ</li>
            <li>Skin Installation</li>
            <li>Skin Customization</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Terms & Conditions</h3>
          <ul className="space-y-2">
            <li>Payment & Shipping</li>
            <li>Returns & Refunds</li>
            <li>General Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Keep in Touch</h3>

          <div className="flex gap-4 text-xl mb-4">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaPinterest />
          </div>

          <p>
            Mon–Sat: 09:00–18:00 <br />
            Holidays excluded
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div
        className="border-t"
        style={{ borderColor: theme.colors.border }}
      ></div>

      {/* BOTTOM */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <p>© 2026 Doto Design</p>

        <div className="flex gap-4 text-2xl">
          <FaCcPaypal />
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
        </div>

        <div>
          Italiano | English
        </div>

      </div>

      <div className="text-center text-xs pb-6 px-6 opacity-80">
        Doto Design s.r.l. | Castelvetere S/C (AV) | Italia <br />
        P.IVA 03177840646 | REA AV - 305754
      </div>

    </footer>
  );
}

export default Footer;