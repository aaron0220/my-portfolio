import React, { useEffect, useState } from "react";
import {
  HouseIcon,
  UserIcon,
  BriefcaseBusinessIcon,
  ListCheckIcon,
  ShapesIcon,
  GripVerticalIcon,
} from "./icons/LucideIcons";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: HouseIcon },
  { id: "about", label: "About", Icon: UserIcon },
  { id: "resume", label: "Resume", Icon: BriefcaseBusinessIcon },
  { id: "services", label: "Services", Icon: ListCheckIcon },
  { id: "skills", label: "Skills", Icon: ShapesIcon },
  { id: "portfolio", label: "Works", Icon: GripVerticalIcon },
];

function IconNav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <button
        type="button"
        className={`icon-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="dmenu desktop-menu">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-label={item.label}
            >
              <item.Icon className="nav-icon" size={20} />
              <span className="tooltip">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={`responsive-sidebar-menu ${menuOpen ? "active" : ""}`}>
        <div className="overlay" onClick={closeMenu}></div>
        <div className="sidebar-menu-inner">
          <p className="text-white text-lg mb-6 px-2">Menu</p>
          <ul className="flex flex-col gap-5 mb-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 text-base ${
                    active === item.id ? "text-drake-accent" : "text-drake-muted"
                  }`}
                >
                  <item.Icon size={18} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:aaronmerin.s@gmail.com" className="theme-btn" onClick={closeMenu}>
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}

export default IconNav;
