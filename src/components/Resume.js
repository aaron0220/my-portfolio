import React from "react";
import Experience from "./section/Experience";
import Title from "./section/Title";
import { BriefcaseBusinessIcon } from "./icons/LucideIcons";

function Resume() {
  const EXPERIENCES = [
    {
      year: "2018 - 2026",
      title: "Full-Stack WordPress Developer",
      company: "Intoweb",
      description:
        "Eight years of professional WordPress development spanning customization, website maintenance, and complex client builds. I delivered high-quality, responsive websites while continuously strengthening my technical skills and understanding of WordPress at scale.",
    },
    {
      year: "2017 - 2018",
      title: "Front-End WordPress Developer",
      company: "Fatweb",
      description:
        "Worked with the Fatweb development team for one year and two months, collaborating with project managers and backend developers to deliver coordinated, high-quality websites that met client expectations.",
    },
    {
      year: "2016 - 2017",
      title: "Mid WordPress Developer",
      company: "Cristersmedia",
      description:
        "Collaborated closely with Buddy over one year and seven months, managing tasks through email and Skype. The work focused on CMS-based web development, with a strong emphasis on MODX and a significant share of WordPress projects.",
    },
    {
      year: "2015 - 2016",
      title: "Web Developer",
      company: "PCDM",
      description:
        "Started my career at PCDM working on a range of web development projects, from custom themes to complex e-commerce platforms. I built a foundation in front-end and back-end development, with a focus on performance and user experience.",
    },
  ];

  return (
    <section id="resume" className="resume-area pt-12 nav:pt-[90px] pb-12 nav:pb-[90px]">
      <div className="content-width">
        <Title
          icon={<BriefcaseBusinessIcon size={14} />}
          label="Resume"
          heading={
            <>
              Education & <span className="text-drake-accent">Experience</span>
            </>
          }
        />
        <div className="resume-timeline">
          {EXPERIENCES.map((item) => (
            <Experience
              key={item.year}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
            />
          ))}
          <Experience
            year="2011 - 2015"
            title="Information Technology"
            company="Gordon College"
            description="Completed a degree in Information Technology, building the academic foundation for a career in web development."
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;
