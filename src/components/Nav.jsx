import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { FaCaretDown } from "react-icons/fa";

const Nav = ({ colorTheme, setTheme }) => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 z-10 fixed bg-white dark:bg-slate-800 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* Main Navigation */}
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          <li>
            <a
              href="/"
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
            <Link
              to="/products"
              className="font-montserrat leading-normal text-lg text-slate-gray flex items-center"
            >
              Products
              <span>
                <FaCaretDown />
              </span>
            </Link>
          </li>
          <li>
            <a
              href="#contact-us"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Theme Toggle */}
        <button
          className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === "light" ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        {/* Hamburger Icon for Small Screens */}
        <div>
          <button
            id="menu-btn"
            onClick={handleHamburger}
            className={`block hamburger lg:hidden ${open ? "open" : ""}`}
            aria-label="Toggle Menu"
            aria-expanded={open ? "true" : "false"}
            aria-controls="menu-list"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      {open && (
        <div className="relative">
          <ul
            id="menu-list"
            className="flex flex-col my-10 justify-center items-center space-y-6 font-bold bg-red-100 w-full z-50 absolute"
          >
            <li>
              <a
                href="/"
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={handleHamburger}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={handleHamburger}
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                to="/products"
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={handleHamburger}
              >
                Products
              </Link>
            </li>
            <li>
              <a
                href="#contact-us"
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={handleHamburger}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
