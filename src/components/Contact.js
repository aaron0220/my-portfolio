import React, { useState } from "react";
import Title from "./section/Title";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formSent, setformSent] = useState(false);

  const checkSubmit = (data) => {
    setformSent(data);
  };

  return (
    <div id="contact" className="py-20 bg-[#343a40]">
      <div className="container px-4 md:px-12 mx-auto">
        <Title heading="Contact" subheading="Interested?"></Title>
        <div className="flex flex-col-reverse xl:flex-row flex-wrap text-white">
          <div className="px-3 w-full xl:w-4/12 text-center lg:text-left">
            <h3 className="font-semibold text-xl uppercase mb-4">Address</h3>
            <div className="leading-[1.8]">
              <p className="mb-4">Philippines</p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-3" />

                <a href="callto:(047) 244 8432" className="text-amber-500">
                  (047) 244 8432
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faMobile} className="mr-3" />

                <a href="callto:+63 930 894 3528" className="text-amber-500">
                  +63 930 894 3528
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <a
                  href="mailto:aaronsmerin01@gmail.com"
                  className="text-amber-500"
                >
                  aaronsmerin01@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="px-3 w-full xl:w-8/12 mb-20 xl:mb-0">
            <h3 className="font-semibold text-xl uppercase mb-4">
              Let's talk!
            </h3>
            {formSent ? (
              <p>Thank you, email sent!</p>
            ) : (
              <Form checkSubmit={checkSubmit}></Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
