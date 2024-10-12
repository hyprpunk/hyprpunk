"use client";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function JumpTopWidget() {
    const [isVisible, setIsVisible] = useState(false);

    const isBroweser = typeof window !== "undefined";
    const scrollToTop = () => {
        if (!isBroweser) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {  
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
        

  return (
    <div  id="jump-top" className={`fixed animate border-2 border-neonPink bottom-4 md:bottom-32 right-4 md:right-10 animate-bounce rounded-full bg-gray-800 p-2 w-14 h-14 flex justify-center items-center scrollToTop ${isVisible ? "visible" : "invisible"}`}>
      <a href="#top">
        <FontAwesomeIcon
          icon={faChevronUp}
          size="2x"
          style={{ color: "#fff" }}
          className="relative top-0.5"
        />
      </a>
    </div>
  );
}
