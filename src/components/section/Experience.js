import React from "react";

function Experience({ year, title, company, description }) {
  return (
    <div className="resume-item">
      <span className="date block mb-6 text-drake-muted transition-colors">{year}</span>
      <h3 className="text-white text-2xl font-light mb-1">{title}</h3>
      <p className="text-[13px] text-drake-muted mb-4">{company}</p>
      <p className="text-[13px] text-drake-muted mb-0 leading-relaxed">{description}</p>
    </div>
  );
}

export default Experience;
