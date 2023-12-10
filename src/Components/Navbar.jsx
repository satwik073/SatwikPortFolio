import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { Links, menuLinks } from "../Constants";

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url);
  };
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const navbarClass = isScrolled ? "bg-white md:px-3 px-4 shadow-xl  " : " md:px-3 px-4 bg-transparent";

  return (
    <div className={`w-full ${navbarClass} fixed top-0 left-0 z-50`}>
      <div className="container w-full mx-auto">
        <div className="flex items-center py-4 md:py-6 ">
          <div className="flex items-center w-full col-lg-3">
            <img src={logo} alt="logo" className="w-12 h-15 md:w-20 md:h-15" />
            <div className="ml-2 md:ml-4">
              <p className="text-lg md:text-[20px] font-bold text-[#00004B] font-poppins tracking-[1px]">
                Satwik kanhere
              </p>
              <p className="text-[#00004B] md:text-[#00004B] text-[18px] tracking-[5px] font-serif">
                Portfolio
              </p>
            </div>
          </div>

          <div className="justify-end flex-1 hidden md:flex">
            <ul className="flex text-[#00004B] justify-end">
              {Links.map((nav, index) => (
                <li
                  key={index}
                  className="mr-8"
                  onClick={() => handleClick(nav.url)}
                >
                  <div className="text-[20px] cursor-pointer">
                    <i className={nav.icon}></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`menu cursor-pointer text-2xl font-bold w-[5.5rem] h-[4rem] bg-[#00004B] rounded-[60%] ${
              isMenuOpen ? "menu-open" : ""
            }`}
            onClick={handleMenuToggle}
          >
            <span className="menu-toggle text-white flex pt-3.5 items-center justify-center">
              &#9776;
            </span>
          </div>

          {isMenuOpen && (
            <div className="fixed left-0 top-0 z-50 h-full w-[90%] md:w-[38%] bg-[#000000f3] text-white">
              <div className="text-black bg-white logo-temp">
                <button
                  onClick={handleCloseMenu}
                  className="absolute text-4xl cursor-pointer top-7 right-4"
                >
                  &times;
                </button>
                <div className="flex items-center py-6 pl-4">
                  <img src={logo} alt="logo" className="mr-4 w-15 h-14 " />
                  <div>
                    <p className="text-[20px] font-bold">Satwik kanhere</p>
                    <p className=" text-[18px] tracking-[5px] font-serif">
                      Portfolio
                    </p>
                  </div>
                </div>
              </div>
              <ul className="mt-8 text-left text-white">
                {menuLinks.map((nav, index) => (
                  <li
                    key={index}
                    className="p-[2rem] py-4 font-semibold   hover:text-[#7151ff] hover:bg-[#44353500] transition-all cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="h-[3.4rem] border-b-[1px] border-y-zinc-800">
                      <div className="text-[16px]">{nav.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
