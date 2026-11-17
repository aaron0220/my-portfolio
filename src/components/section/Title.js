import React from "react";

function Title({ icon, label, heading }) {
  return (
    <div className="mb-2">
      <span className="subtitle">
        {icon}
        {label}
      </span>
      {heading ? (
        <h2 className="text-white text-[38px] md:text-5xl leading-tight font-light mb-8">
          {heading}
        </h2>
      ) : null}
    </div>
  );
}

export default Title;
