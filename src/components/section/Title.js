import React from "react";

function Title(props) {
  return (
    <div className="relative text-center flex mb-12">
      <h2 className="font-semibold uppercase w-full text-6xl opacity-20 md:text-8xl">
        {props.heading}
      </h2>
      <p className="font-semibold absolute w-full text-white self-center text-4xl leading-normal">
        {props.subheading}
        <span className="block w-20 mx-auto border-2 border-amber-500"></span>
      </p>
    </div>
  );
}

export default Title;
