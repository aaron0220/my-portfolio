import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PortfolioModal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function PortfolioModal(props) {
  const slickSlider = useRef(null);

  const {
    projectTitle,
    projectCompany,
    projectURL,
    projectSlides,
    toggle,
    close,
  } = props;

  const closeFunc = () => {
    document.body.classList.remove("modal-active");
    if (slickSlider.current) {
      slickSlider.current.slickGoTo(0);
    }
    close(false);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let domain = "";
  try {
    domain = new URL(projectURL).hostname;
  } catch (error) {
    domain = projectURL;
  }

  const items = (projectSlides || []).map((item, index) => (
    <div key={index}>
      <img src={item} alt={`${projectTitle} slide ${index + 1}`} />
    </div>
  ));

  return (
    <div
      className={`project-details-modal ${toggle ? "active" : ""}`}
      id="modal-container"
    >
      <div className="modal-background">
        <div className="modal-overlay" onClick={closeFunc}></div>
        <div className="modal max-w-[1140px] w-11/12 absolute">
          <div className="modal-content bg-[#1f1f1f] text-white border border-[#565656] rounded-[30px] overflow-hidden">
            <div className="modal-body pt-10 pb-16 px-6 md:px-10">
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute right-5 top-4 cursor-pointer"
                size="2xl"
                style={{ color: "#ffffff" }}
                onClick={closeFunc}
              />
              <div className="container ajax-container text-white">
                <h2 className="text-2xl font-light text-center mb-8 text-white">
                  {projectTitle}
                </h2>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-8/12">
                    <div className="project-slider">
                      {toggle ? (
                        <Slider ref={slickSlider} {...settings}>
                          {items}
                        </Slider>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full px-0 lg:px-4 mt-6 lg:mt-0 lg:w-4/12">
                    <h4 className="text-lg font-light mt-2 text-white">
                      Project Details
                    </h4>
                    <ul>
                      <li className="border-b border-white/20 py-3 text-white">
                        <span className="font-medium mr-2">Company:</span>
                        {projectCompany}
                      </li>
                      <li className="border-b border-white/20 py-3 text-white">
                        <span className="font-medium mr-2">URL:</span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={projectURL}
                          className="text-drake-accent"
                        >
                          {domain}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
