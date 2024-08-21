import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 absolute w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
        {navLinks.map((item) =>(
            <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                    {item.label}
                </a>
            </li>
        ))}
        </ul>
        <div className="hidden max-lag:block">
            
        </div>
      </nav>
    </header>
  );
};

export default Nav;
