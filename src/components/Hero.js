import React, { useState } from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  const [hidden, setHidden] = useState("hidden");
  const [remove, setRemove] = useState("");

  setTimeout(() => {
    setHidden("");
  }, 0);

  setTimeout(() => {
    setRemove("remove");
  }, 1800);
  return (
    <section id="home">
      <div className={`welcome-mask ${remove} bg-black`}>
        <ul className={`fly-in-text ${hidden} ${remove} text-amber-500`}>
          <li>W</li>
          <li>E</li>
          <li>L</li>
          <li>C</li>
          <li>O</li>
          <li>M</li>
          <li>E</li>
        </ul>
      </div>
      <div className="hero-wrap">
        <div className="hero-mask absolute w-full left-0 right-0 h-screen z-2 bg-slate-950 opacity-60"></div>
        <div className="hero-bg parallax bg-center bg-no-repeat bg-cover bg-fixed absolute w-full left-0 right-0 h-screen z-1"></div>
        <div className="hero-content flex relative z-10 h-screen w-full">
          <div className="container my-auto mx-auto">
            <div className="flex ">
              <div className="intro-text w-full text-center">
                <h2
                  id="typeme"
                  className="text-3xl md:text-6xl leading-normal font-semibold text-white mb-2 mb-3"
                >
                  <Typewriter
                    options={{
                      strings: [
                        "A Web Developer.",
                        "A Wordpress Expert.",
                        "A Web Designer.",
                        "A UX/UI Designer.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-xl text-white mb-8">based in Philippines.</p>
                <a
                  href="#contact"
                  className="inline-block py-3 px-10 border-2 border-amber-500 rounded-3xl font-medium text-amber-500 hover:bg-amber-500 hover:text-white ease-in duration-200"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
