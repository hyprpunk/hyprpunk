"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logos/hp_light-logo.png";
import logoMob from "../../../public/logos/hp_logo_two_lines_light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    Services: "#services",
  },
  {
    Technologies: "#technologies",
  },
  {
    Projects: "#projects",
  },
  {
    "Contact Us": "#contact",
  },
];

export default function SiteNavLayout() {
  // const windowSize = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(0);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  function handleHiddenMenu() {
    setHiddenMenu(!hiddenMenu);
  }

  const mobMenuStyles = {
    position: "absolute",
    flexDirection: "column",
    top: "64px",
    width: "100%",
    left: "0rem",
    backgroundColor: "#0B0E1C",
    gap: "1.5rem",
    padding: "1.5rem",
    textAlign: "center",
    borderBottom: "1px solid var(--neonPink)",
    borderTop: "1px solid var(--neonPink)",
    display: hiddenMenu ? "none" : "flex",
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);

      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }

    return;
    () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", () =>
          setWindowWidth(window.innerWidth)
        );
      }
    };
  }, []);

  if (!isMounted) {
    // Don't render anything layout dependent until the component is mounted
    return null;
  }

  return (
    <header className="h-16 bg-darkBlue">
      <nav className="flex justify-between items-center h-full px-4 sticky top-0 z-10">
        <div className="w-[85px] mr-8 md:w-[190px]">
          <Image
            src={windowWidth < 768 ? logoMob : logo}
            alt="Hyprpunk Logo"
            className="relative top-1 left-[-10px]"
          />
        </div>
        <ol
          className="flex gap-8"
          style={windowWidth > 768 ? { display: "flex" } : mobMenuStyles}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item[Object.keys(item)[0]]}
                className="font-michroma text-sm md:text-base hover:text-neonBlue hover:underline"
              >
                {Object.keys(item)[0]}
              </a>
            </li>
          ))}
        </ol>
        <div style={windowWidth > 768 ? { display: "none" } : {}} className="cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#ffffff" }}
            onClick={handleHiddenMenu}
          />
        </div>
      </nav>
    </header>
  );
}