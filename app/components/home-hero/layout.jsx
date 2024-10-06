"use client";

import { useEffect } from "react";
import "../../../public/backgrounds/squared_cyber_back.png";

export default function HomeHeroLayout({ children }) {
  const textContent = {
    title: `Revolutionize Your Online Presence\n with\n`,
    effectText: (
      <span
        data-text="HYPRPUNK"
        className="spider-glitch inline text-8xl font-poppins weight-bold cursor-default"
      >
        HYPRPUNK
      </span>
    ),
  };

  function glitchEffect() {
    const effectText = document.querySelector(".spider-glitch");

    setInterval(() => {
      effectText.classList.add("glitchy");
      setTimeout(() => {
        effectText.classList.remove("glitchy");
      }, 1000);
    }, Math.floor(Math.random() * 1000) + 19000);
  }

  useEffect(() => {
    glitchEffect();
  }, []);

  return (
    <section className="h-[60vh] md:h-[80vh]">
      <div className="flex flex-col items-center justify-center h-full bg-home-hero bg-cover bg-bottom bg-no-repeat px-4">
        <h1 className="text-2xl leading-relaxed font-bold text-center font-michroma tracking-wider drop-shadow-lg whitespace-pre-line sm:text-3xl md:text-4xl md:leading-relaxed">
          {textContent?.title ? textContent.title : "Please add a title"}
          {textContent?.effectText ? textContent.effectText : ""}
        </h1>
      </div>
    </section>
  );
}
