import React from "react";
import Title from "./section/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  faFillDrip,
  faCode,
  faCartShopping,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section id="services" className="py-20 bg-[#343a40] ">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="Services" subheading="What I do"></Title>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-3/6 px-3">
            <div className="pl-20 lg:pl-24 mb-12 relative">
              <div className="flex justify-center items-center absolute w-16 h-16 lg:w-20 lg:h-20 bg-[#212529] top-0 left-0 rounded-lg shadow-xl">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-base lg:text-2xl"
                  style={{ color: "rgb(245, 158, 11)" }}
                />
              </div>
              <h3 className="text-white text-xl mb-2.5 font-semibold">
                Wordpress Development
              </h3>
              <p className="text-white text-base leading-[1.8] text-justify">
                Are you in need of a professional WordPress developer to bring
                your online vision to life? Look no further. My WordPress
                development service is tailored to meet your unique needs,
                whether you arre staring a blog, launching an e-commerce site,
                or revamping your business website.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-3/6 px-3">
            <div className="pl-20 lg:pl-24 mb-12 relative">
              <div className="flex justify-center items-center absolute w-16 h-16 lg:w-20 lg:h-20 bg-[#212529] top-0 left-0 rounded-lg shadow-xl">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="text-base lg:text-2xl"
                  style={{ color: "rgb(245, 158, 11)" }}
                />
              </div>
              <h3 className="text-white text-xl mb-2.5 font-semibold">
                Responsive Design
              </h3>
              <p className="text-white text-base leading-[1.8] text-justify">
                Unlock the potential of your online presence with my expert web
                developer design service. I understand that your website is
                often the first interaction customers have with your brand, and
                I am here to make it count. Me as a skilled web developer and
                designer will collaborate closely with you to create a stunning,
                user-friendly, and responsive website that not only looks
                fantastic but also functions seamlessly across all devices.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-3/6 px-3">
            <div className="pl-20 lg:pl-20 lg:pl-24 mb-12 relative">
              <div className="flex justify-center items-center absolute w-16 h-16 lg:w-20 lg:h-20 bg-[#212529] top-0 left-0 rounded-lg shadow-xl">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-base lg:text-2xl"
                  style={{ color: "rgb(245, 158, 11)" }}
                />
              </div>
              <h3 className="text-white text-xl mb-2.5 font-semibold">
                E-commerce Integration
              </h3>
              <p className="text-white text-base leading-[1.8] text-justify">
                Empower your e-commerce ambitions with our specialized web
                developer e-commerce service. In the fast-paced world of online
                retail, having a robust and user-friendly e-commerce website is
                essential. Me as a experienced web developers who specialize in
                creating tailored e-commerce solutions to meet your unique
                business needs.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-3/6 px-3">
            <div className="pl-20 lg:pl-24 mb-12 relative">
              <div className="flex justify-center items-center absolute w-16 h-16 lg:w-20 lg:h-20 bg-[#212529] top-0 left-0 rounded-lg shadow-xl">
                <FontAwesomeIcon
                  icon={faFillDrip}
                  className="text-base lg:text-2xl"
                  style={{ color: "rgb(245, 158, 11)" }}
                />
              </div>
              <h3 className="text-white text-xl mb-2.5 font-semibold">
                UI/UX Design
              </h3>
              <p className="text-white text-base leading-[1.8] text-justify">
                Elevate your digital presence with my UI/UX design service. I
                understand that in today's hyper-competitive digital landscape,
                user experience is paramount. Me as a talented UI/UX designers
                is committed to creating visually stunning and intuitively
                functional interfaces that captivate your audience and keep them
                engaged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
