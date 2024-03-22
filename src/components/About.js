import React from "react";
import Title from "./section/Title";

function About() {
  return (
    <section id="about" className="py-20 bg-[#212529]">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="About Me" subheading="Know Me More"></Title>
        <div className="flex flex-wrap">
          <div className="w-full lg:mt-12 px-4 xl:w-4/6">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              <span className="text-amber-500">Aaron Merin,</span> a Web
              Developer
            </h2>
            <p className="text-white mb-4 leading-7 text-justify">
              I am a passionate and dedicated web developer with a strong
              commitment to crafting exceptional digital experiences. With my 7+
              years of experience in the ever-evolving world of web development,
              I have had the privilege of working on a diverse range of
              projects, from creating stunning websites for businesses to
              developing custom web applications.
            </p>
            <p className="text-white mb-4 leading-7 text-justify">
              My goal is to not only meet but exceed expectations by delivering
              clean, efficient, and user-centric web solutions. Explore my
              portfolio to get a glimpse of my work, and feel free to get in
              touch if you are interested in collaborating on your next web
              project. Let us turn your web development ideas into reality!
            </p>
          </div>
          <div className="w-full mt-12 px-4 xl:w-2/6">
            <div className="xl:pl-6">
              <ul className="list-style-2 mb-4">
                <li className="border-b border-white/50 py-3 text-white">
                  <span className="font-semibold mr-2">Name:</span>Aaron Merin
                </li>
                <li className="border-b border-white/50 py-3 text-white">
                  <span className="font-semibold mr-2">Email:</span>
                  <a href="mailto:aaronsmerin01.com" className="text-amber-500">
                    aaronsmerin01@gmail.com
                  </a>
                </li>
                <li className="border-b border-white/50 py-3 text-white">
                  <span className="font-semibold mr-2">Age:</span>29
                </li>
                <li className="border-b-0 border-white/50 py-3 text-white">
                  <span className="font-semibold mr-2">From:</span>Bataan,
                  Philippines
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
            <div className="w-6/12 md:w-1/4 px-3 py-6">
              <div className="featured-box text-center">
                <h4 className="font-semibold text-5xl leading-snug mb-0 text-white">
                  <span>7</span>+
                </h4>
                <p className="mb-0 text-white">Years Experiance</p>
              </div>
            </div>
            <div className="w-6/12 md:w-1/4 border-l border-white/20 px-3 py-6">
              <div className="featured-box text-center">
                <h4 className="font-semibold text-5xl leading-snug mb-0 text-white">
                  <span>100</span>+
                </h4>
                <p className="mb-0 text-white">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
