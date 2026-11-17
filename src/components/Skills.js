import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faWordpress, faJs, faReact, faPhp, faFigma } from "@fortawesome/free-brands-svg-icons";
import Title from "./section/Title";
import { ShapesIcon, PhotoshopIcon } from "./icons/LucideIcons";

function Skills() {
  const SKILLS = [
    { name: "WordPress", percent: "100%", icon: faWordpress },
    { name: "JavaScript", percent: "100%", icon: faJs },
    { name: "PHP", percent: "100%", icon: faPhp },
    { name: "React JS", percent: "100%", icon: faReact },
    { name: "Web Design", percent: "100%", icon: faPenNib },
    { name: "Figma", percent: "100%", icon: faFigma },
    { name: "Photoshop", percent: "100%", Icon: PhotoshopIcon },
  ];

  return (
    <section id="skills" className="skills-area pt-12 nav:pt-[90px] pb-10">
      <div className="content-width">
        <Title
          icon={<ShapesIcon size={14} />}
          label="Skills"
          heading={
            <>
              My <span className="text-drake-accent">Skills</span>
            </>
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-card text-center">
              <div className="skill-inner">
                {skill.Icon ? (
                  <skill.Icon size={72} className="text-white mb-7 mx-auto block" />
                ) : (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-white text-7xl mb-7 block mx-auto"
                  />
                )}
                <h2 className="text-drake-accent text-[30px] font-light m-0">{skill.percent}</h2>
              </div>
              <p className="text-sm text-white m-0">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
