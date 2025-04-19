import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

const FadeDown = ({ children }) => {
  const el = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(el.current.children, {
        duration: 1,
        ease: "bounce.out",
        yPercent: -100,
        stagger: 0.1,
        transformOrigin: "0% 0%",
        // autoAlpha: 0,
        scrollTrigger: {
          trigger: el.current.children,
          //toggleActions: "restart pause resume reverse",
          start: "50% 90%",
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={el} className="">
      {children}
    </div>
  );
};

export default FadeDown;
