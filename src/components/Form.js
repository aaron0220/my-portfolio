import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form({ checkSubmit }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mt6bki9",
        "template_ra1nw9f",
        form.current,
        "SF5rzjmgQit1goOnk"
      )
      .then(
        (result) => {
          checkSubmit(true);
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-rows-none grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-1">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="bg-gray-800 px-4 py-3.5 rounded-lg w-full"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="bg-gray-800 px-4 py-3.5 rounded-lg w-full"
          />
        </div>
        <div className="col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            className="bg-gray-800 px-4 py-3.5 rounded-lg w-full h-32"
          />
        </div>
        <div className="col-span-2 col-end-3 text-center xl:text-left">
          <input
            type="submit"
            value="Send"
            className="font-medium px-12 py-3.5 xl:px-6 rounded-lg cursor-pointer bg-amber-500"
          />
        </div>
      </div>
    </form>
  );
}
export default Form;
