import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo_white.png";
import Logo_Black from "../assets/images/logo_black.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const links = [
    { href: "#OUR_MISSION", text: "OUR MISSION" },
    { href: "#MEET_ELI", text: "MEET ELI" },
    { href: "#PROGRAM_OVERVIEW", text: "PROGRAM OVERVIEW" },
    { href: "#ASK_MY_COW", text: "ASK MY COW" },
    { href: "#BOOK_A_CALL", text: "BOOK A CALL" },
  ];

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative z-10 mb-0 w-full flex justify-between p-5 bg-transparent lg:flex lg:justify-between lg:items-center lg:px-16 lg:py-0">
      <div className="lg:mt-0 lg:mb-0">
        <img
          src={logo}
          alt="Logo"
          className="h-24 lg:h-32 w-auto absolute top-0 left-0 m-2"
        />
      </div>
      <div className="lg:hidden">
        {/* Toggle button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-0 right-0 m-5 z-30"
        >
          {isOpen ? (
            <AiOutlineClose className="text-[#3c7278] text-4xl" />
          ) : (
            <AiOutlineMenu className="text-white text-5xl mb-0 space-x-10" />
          )}
        </button>
      </div>
      {(isOpen || isDesktop) &&
        (isOpen ? (
          <div
            className={`w-screen h-auto bg-[#D9D9D9] absolute top-0 left-0 z-20 flex flex-col items-end justify-end space-y-4 border-b-2 border-gray-300 ${isOpen ? "block" : "hidden"
              } lg:hidden`}
          >
            {/* Navigation links for mobile */}
            <img
              src={Logo_Black}
              alt="Logo"
              className="h-28 w-auto absolute top-0 left-0 m-2"
            />
            <div className="h-3/4 w-full pt-32 flex flex-col items-end justify-end  overflow-auto">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#3c7278] font-FuturaCond text-lg w-3/5 mr-2 mb-2 py-3 text-right pr-6 "
                  // style={{ right: "2px" }}
                >
                  {link.text}
                  <hr className="bg-[#3c7278] h-0.5 mt-3  w-40 ml-auto mr-[-3%]" />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`space-x-4  m-16 ${isOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:space-x-10`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white font-FuturaCond text:md  hover:text-gray-300 lg:text-2xl"
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
    </nav>
  );
};

export default Navbar;
