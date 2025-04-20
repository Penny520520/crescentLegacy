import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAppear from "../../../components/anime/TextAppear";
import FadeDown from "../../../components/anime/FadeDown";
import "./style.css";

const Banner = ({ url, heading, isProject }) => {
  const bnrRef = useRef(null);

  const [hasScolled, setHasScolled] = useState(false);
  useLenis(({ scroll }) => {
    if (scroll === 0) {
      setHasScolled(false);
    } else {
      setHasScolled(true);
    }
  });
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
    <>
      <div ref={bnrRef} className="banner is-relative">
        <div
          className="bg-video-container bg-container"
          style={{ backgroundImage: `url(${url})` }}
        >
          {/* <img src={url} alt="linden house banner" /> */}
        </div>
        <div className="wrapper-h1">
          <TextAppear>
            <h1>
              {heading.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </h1>
            {isProject && (
              <Link to="#register" className="btn btn-project-bnr">
                Register
              </Link>
            )}
          </TextAppear>
        </div>
        <div className="line"></div>
      </div>
      {hasScolled && (
        <FadeDown>
          <Link to="#register" className="btn btn-project-bnr circle">
            Register
          </Link>
        </FadeDown>
      )}
    </>
  );
};

export default Banner;
