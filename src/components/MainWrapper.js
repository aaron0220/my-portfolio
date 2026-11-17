import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Resume from "./Resume";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import PortfolioModal from "./PortfolioModal";
import Sidebar from "./Sidebar";
import IconNav from "./IconNav";

function MainWrapper() {
  useEffect(() => {
    document.title = "Aaron Merin | Portfolio";
  }, []);

  const [projectTitle, setProjectTitle] = useState("Name");
  const [projectInfo, setprojectInfo] = useState("Info");
  const [projectCompany, setprojectCompany] = useState("Company");
  const [projectURL, setprojectURL] = useState("https://www.sample.com/");
  const [projectSlides, setprojectSlides] = useState([]);
  const [modalToggle, setmodalToggle] = useState(null);

  const selectedProject = (data) => {
    setProjectTitle(data.name);
    setprojectInfo(data.info);
    setprojectCompany(data.company);
    setprojectURL(data.url);
    setprojectSlides(data.slides);
  };

  const modalOpen = (data) => {
    setmodalToggle(data);
  };

  const modalClose = (data) => {
    setmodalToggle(data);
  };

  return (
    <div id="main-wrapper" className="drake-main min-h-screen">
      <Sidebar variant="fixed" />
      <IconNav />
      <div className="custom-container">
        <Sidebar variant="inline" />
        <div id="content">
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Portfolio portfolio={selectedProject} open={modalOpen} />
          <PortfolioModal
            projectTitle={projectTitle}
            projectInfo={projectInfo}
            projectCompany={projectCompany}
            projectURL={projectURL}
            projectSlides={projectSlides}
            toggle={modalToggle}
            close={modalClose}
          />
          <p className="copyright text-center text-sm pt-10 pb-12 nav:hidden">
            © {new Date().getFullYear()} Aaron. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
