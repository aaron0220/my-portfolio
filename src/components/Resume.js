import React from "react";
import Experience from "./section/Experience";
import Title from "./section/Title";

function Resume() {
  const EXPERIENCES = [
    {
      year: "2018 - 2026",
      title: "Fullstack Wordpress Developer",
      company: "Intoweb",
      description:
        "I have 8 years of professional experience as a WordPress Developer, where I developed extensive expertise in web development, WordPress customization, and website maintenance. During this time, I worked on a wide range of projects, tackled complex technical challenges, and developed high-quality, responsive websites that met client requirements and expectations. This experience allowed me to continuously improve my technical skills and gain a strong understanding of WordPress development and customization.",
    },
    {
      year: "2017 - 2018",
      title: "Frontend Wordpress Developer",
      company: "Fatweb",
      description:
        "I worked as a part of a Fatweb team development for 1 year and 2 months. collaborate with the project manager and backend developers to ensure seamless coordination and execution of our web development projects. This collaborative approach allows us to combine our respective strengths and expertise to deliver high-quality websites that meet our clients' expectations.",
    },
    {
      year: "2016 - 2017",
      title: "Cristersmedia",
      company: "Mid Wordpress Developer",
      description:
        "During my tenure at Cristersmedia, spanning 1 year and 7 months, I had the opportunity to collaborate closely with Buddy. He had a unique and effective approach to task assignment, often delivering instructions directly via email and Skype, which allowed for efficient communication and project management. Our primary focus was on web development using various content management systems, with a strong emphasis on Modx and a significant portion of our projects being on the WordPress platform.",
    },
    {
      year: "2015 - 2016",
      title: "Web Developer",
      company: "PCDM",
      description:
        "I started my career at PCDM where I worked on a range of web development projects, from creating custom themes to building complex e-commerce platforms. During my time at PCDM, I honed my skills in front-end and back-end development, gaining valuable experience in optimizing website performance and user experience.",
    },
  ];
  return (
    <section id="resume" className="py-20 bg-[#212529]">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="Summary" subheading="Resume"></Title>
        <div className="flex flex-wrap">
          <div className="w-full px-3 mb-6">
            <h2 className="text-2xl mb-6 text-white font-semibold">
              My Experience
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-6">
              {EXPERIENCES.map((item, index) => (
                <Experience
                  key={index}
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                ></Experience>
              ))}
            </div>
          </div>
          <div className="w-full px-3 mb-6">
            <h2 className="text-2xl mb-6 text-white font-semibold">
              My Education
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-6">
              <div className="bg-[#111418] rounded-lg p-4 mb-4 p-6">
                <p className="text-sm rounded inline-block py-1.5 px-2 leading-none text-white mb-4 bg-amber-500">
                  2011 - 2015
                </p>
                <h3 className="text-xl font-medium text-white mb-2">
                  Information Technology
                </h3>
                <p className="text-amber-500 mb-4">Gordon College</p>
                <p className="mb-0 text-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3 mb-6">
            <h2 className="text-2xl mb-6 text-white font-semibold">
              My Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  Wordpress <span className="float-right">100%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[100%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  HTML/CSS <span className="float-right">100%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[100%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  Javascript <span className="float-right">95%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[95%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  jQuery <span className="float-right">100%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[100%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  PHP <span className="float-right">98%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[98%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  React JS <span className="float-right">57%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[57%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  Bootstrap <span className="float-right">96%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[96%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  Tailwind <span className="float-right">96%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[96%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  MySQL <span className="float-right">86%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[86%]"></div>
                </div>
              </div>
              <div className="skill">
                <p className="font-medium text-white mb-2 leading-[1.8]">
                  Web Design <span className="float-right">100%</span>
                </p>
                <div className="progress progress-sm mb-4 bg-black flex h-2 rounded overflow-hidden">
                  <div className="progress-bar bg-amber-500 flex w-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
