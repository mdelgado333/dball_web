'use client'

import { useEffect, useState } from "react"
import { bebas, roboto } from "../fonts"

export default function DballPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Faster opacity increase (change 500 to 200)
  const opacity = Math.min(scrollY / 200, 1); // Increase opacity more quickly
  const translateY = Math.max(50 - scrollY / 5, 0); // Less movement for a subtle effect

  return (
    <div className="w-2/3 h-[750px] flex flex-col items-center">
      {/* DBALL Title */}
      <div className={`${bebas.className} text-white text-center text-[125px] sm:text-[250px] md:text-[300px] lg:text-[375px] mb-4 h-[175px] sm:h-[325px] lg:h-[450px]`}>
        DBALL
      </div>

      {/* Subtitle with Scroll Effect */}
      <div 
        className={`${roboto.className} w-full sm:w-full xl:w-[700px] text-center text-white text-[25px] lg:text-[50px]`}
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        Bienvenido al ecosistema DBALL, donde el epicentro es el baloncesto y los satélites son la mentalidad incansable, la mejora diaria en todas las áreas y conseguir tu mejor físico.
      </div>
    </div>
  );
}
