import React, { useState } from "react";
// import { useInView } from "react-intersection-observer";
import NavItem from "./section/NavItem";
import "./Navbar.scss";

function Navbar() {
  const [show, setShow] = useState("");
  

  const toggle = () => {
    show === "" ? setShow("show") : setShow("");
  };

  

  

  const NAVITEMS = [
    {
      label: "Home",
      url: "home",
    },
    {
      label: "About Me",
      url: "about",
    },
    {
      label: "What I Do",
      url: "services",
    },
    {
      label: "Resume",
      url: "resume",
    },
    {
      label: "Portfolio",
      url: "portfolio",
    },
  ];
  return (
    <nav className="primary-menu bg-neutral-900 w-full lg:w-64 h-auto lg:h-full overflow-hidden overflow-visible lg:overflow-y-auto start-0 fixed z-40">
      <div className="container-nav flex lg:flex-col justify-between lg:justify-center items-center h-full lg:h-auto px-4 lg:py-4 lg:px-4 relative">
        <a className="mb-lg-auto lg:mt-4" href="#home">
          <span className="bg-amber-500 p-1 inline-block rounded-full hidden mb-4 lg:block">
            <img
              className="rounded-full"
              src="media/aaron.jpg"
              title="I'm Aaron"
              alt="profile"
            />
          </span>

          <h1 className="text-xl text-white text-center font-semibold">
            Aaron Merin
          </h1>
        </a>
        <div
          id="header-nav"
          className="my-auto w-full absolute top-[99%] z-40 start-0 p-4 lg:p-0 bg-nav lg:bg-transparent hidden lg:flex lg:mt-10"
          style={{ display: show ? "block" : "" }}
        >
          <ul className="navbar-nav w-full text-left lg:text-center text-white ">
            {NAVITEMS.map((item, index) => (
              <NavItem key={index} label={item.label} url={item.url}></NavItem>
            ))}
          </ul>
        </div>
        <button
          className={`navbar-toggler ${show}`}
          id="navbar-toggler"
          type="button"
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
