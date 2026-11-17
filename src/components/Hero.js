import React from "react";
import Title from "./section/Title";
import { HouseIcon, ArrowDownIcon } from "./icons/LucideIcons";

function Hero() {
  return (
    <section id="home" className="hero-section pt-10 nav:pt-[68px] pb-10 nav:pb-[90px]">
      <div className="content-width">
        <Title icon={<HouseIcon size={14} />} label="Introduce" />
        <h1 className="text-white text-[42px] sm:text-[50px] md:text-[58px] nav:text-[72px] leading-[1.2] nav:leading-[84px] font-light mb-8 tracking-tight">
          <span className="text-drake-accent">WordPress Developer</span> and Web Designer
        </h1>
        <p className="max-w-[480px] mb-8 text-drake-muted">
          I design and build clean, high-performing websites — and I love
          what I do. Simple as that.
        </p>
        <a href="#portfolio" className="go-to-project-btn shrink-0" aria-label="View projects">
          <svg viewBox="0 0 200 200" className="animate-rotating">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
              />
            </defs>
            <text fill="#ffffff" fontSize="22" letterSpacing="3">
              <textPath href="#circlePath">
                MY PROJECTS • MY PROJECTS •
              </textPath>
            </text>
          </svg>
          <ArrowDownIcon size={40} className="center-icon" />
        </a>
        <div className="flex flex-wrap gap-10 md:gap-24 mt-10">
          <div>
            <h2 className="text-drake-accent text-5xl md:text-6xl font-light leading-none mb-6">
              8+
            </h2>
            <p className="text-sm uppercase leading-6 m-0">
              Years of
              <br />
              Experience
            </p>
          </div>
          <div>
            <h2 className="text-drake-accent text-5xl md:text-6xl font-light leading-none mb-6">
              100+
            </h2>
            <p className="text-sm uppercase leading-6 m-0">
              Projects completed
              <br />
              for clients worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
