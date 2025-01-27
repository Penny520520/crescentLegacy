import { useEffect } from "react";
import gsap from "gsap";
import "./style.css";

const LandingAnimate = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", {
        transform: "translateY(0px)",
        opacity: 1,
        ease: "easeInOut",
        duration: 1,
      });
      gsap.to(".landing-loader", {
        opacity: 0,
        // visibility: "hidden",
        ease: "easeInOut",
        delay: 1,
        duration: 1,
      });
      gsap.to(".landing-loader", {
        visibility: "hidden",
        delay: 5,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="landing-loader">
      <img
        className="logo"
        src="images/logo/logo-landing.png"
        alt="Crescent Legacy logo"
      />
    </div>
  );
};

export default LandingAnimate;
