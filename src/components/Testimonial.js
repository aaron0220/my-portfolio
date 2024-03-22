import React from "react";
import Title from "./section/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonial(props) {
  const TESTIMONIALS = [
    {
      name: "Mirco Staudt",
      image: "media/testimonials/mirco.jpg",
      title: "Founder at Intoweb",
      message:
        "Working with Aaron has been an absolute pleasure. His expertise in web development is evident, and he were always responsive to our needs and feedback.",
    },
    {
      name: "Buddy Rigotti",
      image: "media/testimonials/buddy.jpg",
      title: "Digital Marketer at Cristersmedia",
      message:
        "Aaron is a true professional. He not only delivered a visually appealing website but also ensured that it functions flawlessly. Our client's site's performance has improved significantly since they took over.",
    },
    {
      name: "Niño Amores",
      image: "media/testimonials/nino.jpg",
      title: "Web Development Specialist at RYCO",
      message:
        "Working with Aaron is like having a web development partner who truly cares about your success. He provided valuable insights and delivered a website that aligns perfectly with our business goals.",
    },
    {
      name: "Martyn Cook",
      image: "media/testimonials/martyn.jpg",
      title: "Founder at Noobru.com",
      message:
        "Aaron is a problem solver. He came up with creative solutions that kept the project on track. His commitment to delivering quality work is commendable.",
    },
  ];

  const items = TESTIMONIALS.map((item, index) => (
    <div key={index} className="rounded-lg bg-[#111418] p-12 text-white">
      <div key={index} className="flex items-center mb-6">
        <img className="rounded-full border" src={item.image} alt={item.name} />
        <p className="ml-4 flex flex-col">
          <span className="font-semibold">{item.name}</span>
          <span>{item.title}</span>
        </p>
      </div>
      <p className="mb-4">{item.message}</p>
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    </div>
  ));
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="py-20 bg-[#212529]">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="Testimonial" subheading="Client Speak"></Title>
        <div className="testimonial-slider ">
          <Slider {...settings}>{items}</Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
