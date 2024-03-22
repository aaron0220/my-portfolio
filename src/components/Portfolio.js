import React from "react";
import "./Portfolio.scss";
import Title from "./section/Title";

function Portfolio({ open, portfolio }) {
  const PROJECTS = [
    {
      id: 10,
      name: "Noobru Advantage",
      company: "Noobru",
      image: "media/portfolio/noobru-advantage/frontpage.jpg",
      url: "https://go.noobru.com/noobru-advantage-memory-focus-ak1111np/",
      slides: [
        "media/portfolio/noobru-advantage/1.jpg",
        "media/portfolio/noobru-advantage/2.jpg",
      ],
    },
    {
      id: 9,
      name: "Inhesa",
      company: "Intoweb",
      image: "media/portfolio/inhesa/frontpage.jpg",
      url: "https://www.inhesa.de/",
      slides: ["media/portfolio/inhesa/1.jpg", "media/portfolio/inhesa/2.jpg"],
    },
    {
      id: 8,
      name: "Dont Call Me Sick",
      company: "Intoweb",
      image: "media/portfolio/dcms/frontpage.jpg",
      url: "https://www.dont-call-me-sick.de/",
      slides: ["media/portfolio/dcms/1.jpg", "media/portfolio/dcms/2.jpg"],
    },
    {
      id: 7,
      name: "In-Australien",
      company: "Intoweb",
      image: "media/portfolio/in-australien/frontpage.jpg",
      url: "https://www.in-australien.com/",
      slides: [
        "media/portfolio/in-australien/1.jpg",
        "media/portfolio/in-australien/2.jpg",
      ],
    },
    {
      id: 6,
      name: "Berlin Piercing",
      company: "Intoweb",
      image: "media/portfolio/berlin-piercing/frontpage.jpg",
      url: "https://www.berlin-piercing.de/",
      slides: [
        "media/portfolio/berlin-piercing/1.jpg",
        "media/portfolio/berlin-piercing/2.jpg",
      ],
    },
    {
      id: 5,
      name: "Portstrasse",
      company: "Intoweb",
      image: "media/portfolio/portstrasse/frontpage.jpg",
      url: "https://portstrasse.de/",
      slides: [
        "media/portfolio/portstrasse/1.jpg",
        "media/portfolio/portstrasse/2.jpg",
      ],
    },
    {
      id: 4,
      name: "Tagewerk Events",
      company: "Intoweb",
      image: "media/portfolio/tagewerk/frontpage.jpg",
      url: "https://www.tagewerk-events.de/",
      slides: [
        "media/portfolio/tagewerk/1.jpg",
        "media/portfolio/tagewerk/2.jpg",
      ],
    },
    {
      id: 3,
      name: "The Met Location",
      company: "Intoweb",
      image: "media/portfolio/the-mett-location/frontpage.jpg",
      url: "https://the-mett-location.de/",
      slides: [
        "media/portfolio/the-mett-location/1.jpg",
        "media/portfolio/the-mett-location/2.jpg",
      ],
    },
    {
      id: 2,
      name: "Wine to Web",
      company: "Intoweb",
      image: "media/portfolio/winetoweb/frontpage.jpg",
      url: "https://winetoweb.net/",
      slides: [
        "media/portfolio/winetoweb/1.jpg",
        "media/portfolio/winetoweb/2.jpg",
      ],
    },
    {
      id: 1,
      name: "Gottschalk Partner",
      company: "Intoweb",
      image: "media/portfolio/gottschalk-partner/frontpage.jpg",
      url: "https://gottschalk-partner.de/",
      slides: [
        "media/portfolio/gottschalk-partner/1.jpg",
        "media/portfolio/gottschalk-partner/2.jpg",
      ],
    },
  ];

  const showData = (id) => {
    const project = PROJECTS.find((item) => item.id === id);
    portfolio(project);
    open(true);
    document.body.classList.add("modal-active");
  };

  return (
    <section id="portfolio" className="py-20 bg-[#343a40]">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="Portfolio" subheading="My Works"></Title>
        <div className="portfolio">
          <div className="portfolio-filter ">
            <div className="filter-item px-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {PROJECTS.map((item) => (
                <div
                  id={item.id}
                  key={item.id}
                  className="portfolio-box relative rounded overflow-hidden cursor-pointer"
                  onClick={() => showData(item.id)}
                >
                  <div className="portfolio-img">
                    <img className="" src={item.image} alt="" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-details my-auto w-full">
                        <h5 className="text-white text-xl">{item.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
