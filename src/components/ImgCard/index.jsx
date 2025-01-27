import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

const ImgCard = ({ newTab, route, imgPath, sellStatus, title, location }) => {
  const imgcardRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const imgcard = imgcardRef.current;
      const img = imgRef.current;
      const zoomImg = gsap.timeline({ paused: true });
      zoomImg.fromTo(
        img,
        { autoAlpha: 0.88 },
        {
          scale: 1.03,
          autoAlpha: 1,
          duration: 0.5,
        }
      );
      imgcard.addEventListener("mouseenter", () => {
        zoomImg.play();
      });
      imgcard.addEventListener("mouseleave", () => {
        zoomImg.reverse();
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Link
      to={route}
      className=""
      target={Number(newTab) ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      <div ref={imgcardRef} className="img-card is-relative">
        <img ref={imgRef} src={imgPath} alt="Crescent Legacy" />
        <div className="cover"></div>
        <div className="wrapper">
          <div className="sell-status">{sellStatus}</div>
          <div>
            <div className="title">{title}</div>
            <div className="subtitle">{location}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImgCard;
