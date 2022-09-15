import React from "react";
import { useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-main bg-opacity-95 text-secondary flex py-4 px-2 justify-between w-screen items-center h-full sticky top-0">
      <div className="px-2">
        <h2 className="text-2xl font-semibold">Designology</h2>
      </div>
      <div>
        <ul className="md:flex hidden">
          <li className="px-3 text-xl hover:text-rose cursor-pointer duration-300">
            Portfolio
          </li>
          <li className="px-3 text-xl hover:text-rose cursor-pointer duration-300">
            About Us
          </li>
          <li className="px-3 text-xl hover:text-rose cursor-pointer duration-300">
            Join Us
          </li>
          <li className="px-3 text-xl hover:text-rose cursor-pointer duration-300">
            News & Events
          </li>
        </ul>
      </div>
      <div className="px-4 md:block hidden">
        <button className="border border-secondary rounded-xl py-2 px-3 hover:bg-main hover:text-rose hover:border-rose duration-300">
          Contact Us!
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden block">
        <Hamburger toggled={nav} toggle={setNav} />
      </div>

      <div
        className={
          nav
            ? "absolute top-0 left-0 w-[50%] bg-main h-screen flex flex-col items-center text-center duration-500"
            : "absolute top-0 left-[-100%] w-[50%] bg-main h-screen flex flex-col items-center text-center duration-500"
        }
      >
        <h2 className="text-2xl font-semibold py-6">Designology</h2>
        <ul className="md:hidden flex flex-col">
          <li className="py-2 text-xl">Portfolio</li>
          <li className="py-2 text-xl">About Us</li>
          <li className="py-2 text-xl">Join Us</li>
          <li className="py-2 text-xl">News & Events</li>
          <li className="py-2">
            <button className="text-2xl">Contact Us!</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
