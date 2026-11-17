import React from "react";
import Title from "./section/Title";
import {
  ListCheckIcon,
  CodeXmlIcon,
  PencilRulerIcon,
  ShoppingCartIcon,
  SplinePointerIcon,
} from "./icons/LucideIcons";

function Services() {
  const SERVICES = [
    {
      title: "WordPress Development",
      Icon: CodeXmlIcon,
      description:
        "Professional WordPress development tailored to your goals — whether you are launching a blog, building an e-commerce site, or refreshing a business website.",
    },
    {
      title: "Responsive Design",
      Icon: PencilRulerIcon,
      description:
        "Your website is often the first interaction customers have with your brand. I design user-friendly, responsive sites that look sharp and work seamlessly across devices.",
    },
    {
      title: "E-commerce Integration",
      Icon: ShoppingCartIcon,
      description:
        "Specialized e-commerce builds for online retail. I create robust, conversion-focused stores tailored to your products, operations, and customers.",
    },
    {
      title: "UI/UX Design",
      Icon: SplinePointerIcon,
      description:
        "Visually refined, intuitive interfaces that keep users engaged. I focus on clarity, usability, and a polished experience from first click to conversion.",
    },
  ];

  return (
    <section id="services" className="services-area pt-12 nav:pt-[90px] pb-12 nav:pb-[90px]">
      <div className="content-width">
        <Title
          icon={<ListCheckIcon size={14} />}
          label="Services"
          heading={
            <>
              My <span className="text-drake-accent">Specializations</span>
            </>
          }
        />
        <div className="services-items grid grid-cols-1 gap-2.5 md:grid-cols-2 nav:grid-cols-1">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="service-item group relative border border-[#565656] rounded-[20px] px-8 py-10 transition-colors hover:border-drake-accent"
            >
              <service.Icon
                size={30}
                className="absolute top-10 right-10 text-drake-accent"
              />
              <h3 className="text-white text-2xl font-light mb-2 pr-12 transition-colors group-hover:text-drake-accent">{service.title}</h3>
              <p className="text-sm text-drake-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
