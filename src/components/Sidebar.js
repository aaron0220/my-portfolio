import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { asset } from "../utils/asset";

function Sidebar({ variant = "fixed" }) {
  return (
    <aside className={`left-sidebar ${variant === "inline" ? "inline" : "fixed-card"}`}>
      <div className="flex items-start justify-between gap-4 mb-8">
        <h3 className="text-white text-2xl font-light tracking-wide m-0">Aaron.</h3>
        <p className="text-white text-sm font-normal text-right leading-snug m-0 max-w-[120px]">
          WordPress
          <br />
          Developer
        </p>
      </div>
      <img
        className="w-full rounded-[30px] mb-10 block"
        src={asset("media/me.jpg")}
        alt="Aaron Merin"
      />
      <h2 className="text-white text-[22px] md:text-2xl font-light text-center mb-3 break-all">
        <a href="mailto:aaronmerin.s@gmail.com" className="text-white hover:text-drake-accent transition-colors">
          aaronmerin.s@gmail.com
        </a>
      </h2>
      <h2 className="text-white text-[22px] md:text-2xl font-light text-center mb-8">
        Based in Philippines
      </h2>
      <p className="text-sm text-center mb-8">© {new Date().getFullYear()} Aaron. All Rights Reserved</p>
      <ul className="flex justify-center gap-2 mb-8">
        <li>
          <a
            href="https://www.linkedin.com/in/aaron-merin-463694127/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[50px] h-[50px] border-2 border-[#565656] rounded-full text-drake-muted text-xl hover:text-drake-accent hover:border-drake-accent transition-colors"
            aria-label="Aaron Merin on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
      <a href="mailto:aaronmerin.s@gmail.com" className="theme-btn w-full">
        Hire Me
      </a>
    </aside>
  );
}

export default Sidebar;
