import React, { useState } from "react";
import { logo, searchIcon } from "../../assets/images";
import AiSuite from "./AiSuite";
import Stock from "./Stock";
import Resources from "./Resources";

const Navbar = () => {
  const [isStockOpen, setIsStockOpen] = useState(false);
  const [isAiSuiteOpen, setIsAiSuiteOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleAiSuiteMouseEnter = () => setIsAiSuiteOpen(true);
  const handleAiSuiteMouseLeave = () => setIsAiSuiteOpen(false);
  const handleStockMouseEnter = () => setIsStockOpen(true);
  const handleStockMouseLeave = () => setIsStockOpen(false);
  const handleResourcesMouseEnter = () => setIsResourcesOpen(true);
  const handleResourcesMouseLeave = () => setIsResourcesOpen(false);

  return (
    <div
      style={{ padding: "2em" }}
      className="navbar relative max-h-[70px] p-2 flex items-center justify-between container"
    >
      {/* Left: Logo + Links */}
      <div className="links-container w-1/2 max-h-[70px] p-2 flex items-center gap-8">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src={logo} alt="freepik logo" />
          </a>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-4 text-[15px] links relative">
          <li
            onMouseEnter={handleAiSuiteMouseEnter}
            onMouseLeave={handleAiSuiteMouseLeave}
            className="relative"
          >
            <a href="#">AI Suite</a>

            {/* Dropdown */}
            {isAiSuiteOpen && (
              <div
                onMouseEnter={handleAiSuiteMouseEnter}
                onMouseLeave={handleAiSuiteMouseLeave}
                className="absolute left-0 top-full mt-2 z-50"
              >
                <AiSuite />
              </div>
            )}
          </li>

          <li
            onMouseEnter={handleStockMouseEnter}
            onMouseLeave={handleStockMouseLeave}
            className="relative"
          >
            <a href="#">Stock</a>

            {/* Dropdown */}
            {isStockOpen && (
              <div
                onMouseEnter={handleStockMouseEnter}
                onMouseLeave={handleStockMouseLeave}
                className="absolute left-0 top-full mt-2 z-50"
              >
                <Stock />
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
            className="relative"
          >
            <a href="#">Resources</a>
            {/* Dropdown */}
            {isResourcesOpen && (
              <div
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
                className="absolute left-0 top-full mt-2 z-50"
              >
                <Resources />
              </div>
            )}
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>

      {/* Right: Search + Sign In */}
      <div className="action-container w-1/2 p-2 flex items-center justify-end gap-8">
        {/* Search */}
        <div
          style={{ padding: ".2em 1em" }}
          className="search rounded-2xl w-3/4 p-4 bg-(--search-bg) min-w-[300px] items-center flex"
        >
          <button className="p-2 w-1/12 search-button">
            <img src={searchIcon} alt="search" />
          </button>
          <input
            className="w-11/12 bg-transparent outline-none text-white"
            type="text"
            placeholder="Search assets or start creating"
          />
        </div>

        {/* Sign In */}
        <button className="sign-in text-[15px]">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
