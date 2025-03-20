'use client'

import { useEffect, useState } from "react"

import { bebas, roboto } from "../fonts"
import DBALL from './dball'

export default function DballPage() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust opacity based on scroll position
  const opacity = Math.min(scrollY / 300, 1); // Fade in by 300px scroll
  const translateY = Math.max(100 - (scrollY / 3), 0); // Moves up slightly


    return (
      <div className="w-2/3 h-[750px] lg: xl: 2xl: items-center flex flex-col">
        {/* DBALL Text */}
        <div className={`${bebas.className} h-[175px] sm:h-[325px] lg:h-[450px] xl: 2xl: text-center`}>
          <DBALL 
            text="DBALL"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-white text-center text-[125px] sm:text-[250px] md:text-[300px] lg:text-[375px] mb-4"
          />
        </div>

        {/* Subtitle Text behind the DBALL title */}
        <div className={`${roboto.className} w-5/8 sm:w-full xl:w-[700px] text-center text-white text-[10px] sm:text-[30px] lg:text-[30px]`}
        style={{
          opacity: opacity,
          transform: ` translateY(${translateY}px)`,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
        >
          Bienvenido al ecosistema dball, donde el epicentro es el baloncesto y los satélites son la mentalidad incansable, la mejora diaria en todas las áreas y conseguir tu mejor físico
        </div>
      </div>
    
    )
}