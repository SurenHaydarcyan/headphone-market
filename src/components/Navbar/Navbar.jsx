import React, { useEffect, useRef, useState } from "react";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon";

import NavMenu from "./NavMenu";
import CartSlide from "../BurgerMenu/CartSlide";


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-[1px]" />
      <div
        className={`w-full bg-white border-b border-black transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 shadow-lg z-[100]" : "relative z-[100]"
        }`}
      >
        <div className="container px-4 py-3 flex flex-wrap items-center justify-between">
          
          
          <div className="text-black font-bold text-[30px] tracking-[4px]">
            МЕГАБИТ
          </div>

          <div className="flex items-center gap-5 z-[100]">
            <CartSlide />
            <NavMenu />
            <BurgerMenuIcon />
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
