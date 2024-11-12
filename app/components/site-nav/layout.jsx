"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logos/hp_light-logo.png";
import logoMob from "../../../public/logos/hp_logo_two_lines_light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const hiddenMenuRef = useRef(null);
  const barsRef = useRef(null);

  function handleHiddenMenu() {
    setHiddenMenu(!hiddenMenu);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);

      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }

    return;
    
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(hiddenMenuRef.current && !hiddenMenuRef.current.contains(event.target) && barsRef.current && !barsRef.current.contains(event.target)) {
        setHiddenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [hiddenMenuRef, barsRef]);

  if (!isMounted) {
    // Don't render anything layout dependent until the component is mounted
    return null;
  }

  return (
    <header className="h-16 bg-darkBlue z-20 fixed w-full">
      <nav className="flex justify-between items-center h-full px-4 top-0 z-10 relative bg-[#0B0E1C]">
        <div className="w-[85px] mr-8 md:w-[190px]">
          <Link href="/">
            <Image
              src={windowWidth < 768 ? logoMob : logo}
              alt="Hyprpunk Logo"
              className="relative top-1 left-[-10px]"
            />
          </Link>
        </div>
        <ol className="gap-8 hidden md:flex">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item[Object.keys(item)[0]]}
                className="font-michroma text-sm md:text-base hover:text-neonBlue hover:underline"
              >
                {Object.keys(item)[0]}
              </a>
            </li>
          ))}
        </ol>
        <div
          style={windowWidth > 768 ? { display: "none" } : {}}
          className="cursor-pointer"
          ref={barsRef}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#ffffff" }}
            onClick={(e) => {
              e.stopPropagation();
              handleHiddenMenu();
            }}
          />
        </div>
      </nav>
      <nav className="z-0 relative">
        <ol
          ref={hiddenMenuRef}
          className={`${hiddenMenu ? "mobile-nav-ol" : ""} flex md:hidden absolute bg-[#0B0E1C] w-full flex-col text-center gap-6 p-6 -top-80 transition-all duration-500`}
          style={{
            borderBottom: "1px solid var(--neonPink)",
            borderTop: "1px solid var(--neonPink)",
          }}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item[Object.keys(item)[0]]}
                className="font-michroma text-sm md:text-base hover:text-neonBlue hover:underline"
                onClick={handleHiddenMenu}
              >
                {Object.keys(item)[0]}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
