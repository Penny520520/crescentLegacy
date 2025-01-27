import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./style.css";

const ParaAppear = ({ children }) => {
  const el = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const text = new SplitType(el.current.children);
      gsap.from(text.lines, {
        duration: 1,
        ease: "circ.out",
        yPercent: 110,
        stagger: 0.6,
        transformOrigin: "0% 0%",
        rotate: "1.6deg",
        autoAlpha: 0,
        scrollTrigger: {
          trigger: el.current.children,
          toggleActions: "restart pause resume reverse",
          start: "-150% 60%",
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

export default ParaAppear;
