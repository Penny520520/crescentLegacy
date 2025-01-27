import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAppear from "../anime/TextAppear";
import "./style.css";

const Banner = ({ posterURL, videoURL, heading }) => {
  const bnrRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const bnr = bnrRef.current;
      ScrollTrigger.create({
        trigger: bnr,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={bnrRef} className="banner is-relative">
      <div className="bg-video-container">
        <video
          className="bg-video"
          poster={posterURL}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoURL} type="video/mp4" />
        </video>
      </div>
      <div className="wrapper-h1">
        <TextAppear>
          <h1>
            {heading.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </h1>
        </TextAppear>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Banner;
