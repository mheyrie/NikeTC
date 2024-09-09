import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen((prev) => !prev);
  };
  const handleNavLinkClick = () => {
    setOpen(false);
  };
  return (
    <header className="padding-x py-8 z-10 fixed bg-white w-full">
      {/* <header className="padding-x py-8 z-10 absolute w-full"> */}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          <li>
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Hamburger Icon  */}
        <div>
          {/* <div className="hidden max-lag:block"> */}
          <button
            id="menu-btn"
            onClick={handleHamburger}
            className={`block hamburger lg:hidden ${open ? "open" : ""}`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {open ? (
        <div className="">
          <ul className="flex flex-col my-10 justify-center items-center space-y-6 font-bold bg-red-100 w-full">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Nav;
