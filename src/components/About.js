import React from "react";
import Title from "./section/Title";
import { UserIcon } from "./icons/LucideIcons";

function About() {
  return (
    <section id="about" className="about-area pt-12 nav:pt-[90px] pb-12 nav:pb-[90px]">
      <div className="content-width">
        <Title
          icon={<UserIcon size={14} />}
          label="About"
          heading={
            <>
              Every great website begins with an even{" "}
              <span className="text-drake-accent">better story</span>
            </>
          }
        />
        <div className="about-content max-w-[610px]">
          <p className="leading-[30px] mb-5">
            I am a passionate and dedicated web developer with a strong
            commitment to crafting exceptional digital experiences. With 8+
            years of experience in the ever-evolving world of web development, I
            have worked on a diverse range of projects — from creating polished
            websites for businesses to developing custom web applications.
          </p>
          <p className="leading-[30px] mb-0">
            My goal is to meet and exceed expectations by delivering clean,
            efficient, and user-centric web solutions. Explore my portfolio to
            see my work, and feel free to get in touch if you would like to
            collaborate on your next web project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
