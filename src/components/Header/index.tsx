import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

import Navbar from "../Navbar";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        <h1>
          <a href="/" className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
          </a>
        </h1>
        <div className="relative flex items-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a href="#contact" className="max-md:hidden flex btn btn-secondary md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
