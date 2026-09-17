import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import PortfolioModal from "./PortfolioModal";
import Navbar from "./Navbar";

function MainWrapper() {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  const [projectTitle, setProjectTitle] = useState("Name");
  const [projectInfo, setprojectInfo] = useState("Info");
  const [projectCompany, setprojectCompany] = useState("Company");
  const [projectURL, setprojectURL] = useState("https://www.sample.com/");
  const [projectSlides, setprojectSlides] = useState([]);

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

  const [modalToggle, setmodalToggle] = useState(null);

  return (
    <div id="main-wrapper" className="lg:ml-64">
      <header id="header">
        <Navbar></Navbar>
      </header>
      <div id="content">
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Resume></Resume>
        <Portfolio portfolio={selectedProject} open={modalOpen}></Portfolio>
        <PortfolioModal
          projectTitle={projectTitle}
          projectInfo={projectInfo}
          projectCompany={projectCompany}
          projectURL={projectURL}
          projectSlides={projectSlides}
          toggle={modalToggle}
          close={modalClose}
        ></PortfolioModal>
      </div>
    </div>
  );
}

export default MainWrapper;
