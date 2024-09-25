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
    Projects: "#projects",
  },
  {
    "Our Team": "#team",
  },
  {
    "Contact Us": "#contact",
  },
];

export default function SiteNavLayout() {
  const windowSize = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(windowSize);
  const [hiddenMenu, setHiddenMenu] = useState(true);

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
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
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

  return (
    <header class="h-16 bg-darkBlue">
      <nav class="flex justify-between items-center h-full px-4 sticky top-0">
        <div class="w-[85px] mr-8 md:w-[190px]">
          <Image
            src={windowWidth < 768 ? logoMob : logo}
            alt="Logo"
            class="relative top-1 left-[-10px]"
          />
        </div>
        <ol
          class="flex gap-8"
          style={windowWidth > 768 ? { display: "flex" } : mobMenuStyles}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item[Object.keys(item)[0]]}
                class="font-michroma text-sm md:text-base"
              >
                {Object.keys(item)[0]}
              </a>
            </li>
          ))}
        </ol>
        <div style={windowWidth > 768 ? { display: "none" } : {}}>
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