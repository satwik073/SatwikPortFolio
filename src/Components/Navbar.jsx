import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { CgMenuLeft } from "react-icons/cg";
import { Links, menuLinks } from "../Constants";
import { MdMarkUnreadChatAlt } from "react-icons/md";
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

  const navbarClass = isScrolled ? "bg-white md:px-3 px-4 shadow-lg  " : " md:px-3 px-4 bg-transparent";

  return (
    <div className={`w-full ${navbarClass} fixed top-0 pt-3 left-0 z-50`}>
      <div className="container w-full mx-auto">
        <div className="flex items-center py-3 pb-4 ">
          <div className="flex items-center w-[80%] ">
            <img src={logo} alt="logo" className=" w-12 h-10" />
            <div className="ml-2 md:ml-4">
              <p className="text-md md:text-[20px] font-bold text-[#00004B] font-poppins tracking-[1px]">
                Satwik kanhere
              </p>
              <p className="text-[#00004B] md:text-[#00004B] text-[13px] tracking-[5px] font-serif">
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
            className={`menu cursor-pointer text-2xl  bg-[#000000] rounded-[60%] ${
              isMenuOpen ? "menu-open" : ""
            }`}
            onClick={handleMenuToggle}
          >
            <span className="menu-toggle text-white flex px-3  py-3 items-center justify-center">
            <CgMenuLeft />
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
                  <img src={logo} alt="logo" className="w-12 h-10 mr-2 " />
                  <div>
                    <p className="text-md md:text-[20px] font-bold text-[#00004B] font-poppins tracking-[1px]">Satwik kanhere</p>
                    <p className=" text-[13px] tracking-[5px] font-serif">
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
