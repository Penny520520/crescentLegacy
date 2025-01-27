import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

const LineAppear = ({ children }) => {
  const el = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(el.current.children, {
        duration: 1,
        ease: "circ.out",
        transformOrigin: "0% 0%",
        transform: "scaleX(0)",
        autoAlpha: 0,
        scrollTrigger: {
          trigger: el.current.children,
          start: "30% 90%",
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={el} className="text-appear">
      {children}
    </div>
  );
};

export default LineAppear;
