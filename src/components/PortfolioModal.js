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
    slickSlider.current.slickGoTo(0);
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

  const parsedURL = new URL(projectURL);

  const domain = parsedURL.hostname;

  const items = projectSlides.map((item, index) => (
    <div key={index}>
      <img key={index} src={item} alt={`Slide ${index + 1}`} />
    </div>
  ));

  return (
    <div
      className={`project-details-modal ${toggle ? "active" : ""}`}
      id="modal-container"
    >
      <div className="modal-background">
        <div
          className="modal-overlay"
          onClick={() => {
            closeFunc();
          }}
        ></div>
        <div className="modal max-w-[1140px] w-11/12 absolute">
          <div className="modal-content bg-[#343a40] text-white">
            <div className="modal-body pt-10 pb-16 px-6">
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute right-4 top-2.5 cursor-pointer"
                size="2xl"
                style={{ color: "#ffffff" }}
                onClick={() => {
                  closeFunc();
                }}
              />
              <div className="container ajax-container text-white">
                <h2 className="text-xl font-medium text-center mb-8 text-white">
                  {projectTitle}
                </h2>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-8/12">
                    <div className="project-slider">
                      <Slider ref={slickSlider} {...settings}>
                        {items}
                      </Slider>
                    </div>
                  </div>
                  <div className="w-full px-4 mt-6 lg:mt-0 lg:w-4/12">
                    <h4 className="text-lg font-medium mt-4 text-white">
                      Project Details:
                    </h4>
                    <ul className="list-style-2 list-style-light">
                      <li className="border-b border-white/50 py-3 text-white">
                        <span className="text-dark font-medium me-2 text-white">
                          Company:
                        </span>
                        {projectCompany}
                      </li>
                      <li className="border-b border-white/50 py-3 text-white">
                        <span className="text-dark font-medium me-2 text-white">
                          URL:
                        </span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={projectURL}
                          className="text-amber-500"
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
