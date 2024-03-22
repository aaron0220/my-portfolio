import React from "react";

function Experience(props) {
  return (
    <div className="bg-[#111418] rounded-lg p-4 p-6">
      <p className="text-sm rounded inline-block py-1.5 px-2 leading-none text-white mb-4 bg-amber-500">
        {props.year}
      </p>
      <h3 className="text-xl font-medium text-white mb-2">{props.title}</h3>
      <p className="text-amber-500 mb-4">{props.company}</p>
      <p className="mb-0 text-white text-justify">{props.description}</p>
    </div>
  );
}

export default Experience;
