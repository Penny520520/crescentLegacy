import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner";
import Intro from "../../components/Intro";
import TextImg from "../../components/TextImg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import "./style.css";

const MixedUse = () => {
  const [matches, setMatches] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, [location.pathname, matches]);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <main className="legacy">
        <Banner
          posterURL="/videos/mixed-use.jpg"
          videoURL="/videos/mixed-use.mp4"
          heading={
            matches
              ? [
                  "Smart family-forward",
                  "homes to enjoy for",
                  "generations to come.",
                ]
              : [
                  "Smart family-forward homes to enjoy",
                  "for generations to come.",
                ]
          }
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
            backgroundColor: "#FFFDF6",
          }}
        >
          <Intro
            heading={["Mixed-Use", "Developments"]}
            subheading="At Crescent Legacy, we don’t just build homes, we build communities. With this in mind, all of our multi-family communities are founded on principles of quality design aimed to enrich the lives of both residents and neighbours alike."
            description="When it comes to project planning, we start by carefully selecting prime locations surrounded by everyday conveniences, family-friendly amenities and accessible connections that will ensure long-term market value. From there, we design and construct exceptional residences that offer a combination of sought-after amenities and beautiful contemporary design. Throughout the entire process, we ensure the homes we build are incredible places to live for generations."
          />
          <Box sx={{ flexGrow: 1 }} className="Harlowe-house global-padding">
            <TextImg
              heading={["Ava", "at Langara & 49th"]}
              description="A contemporary collection of 35 condominium homes and 6 commercial units across the road from Langara College."
              btnRoute="https://ownava.com/"
              btnNewTab="1"
              btnContent="View Featured Project"
              newTab="1"
              route="https://ownava.com/"
              imgPath="/images/mixed-use/Ava-hero.jpg"
              sellStatus="75% Sold"
              title="Ava"
              location="Vancouver | West Side"
            />
          </Box>
        </div>
      </main>
    </ReactLenis>
  );
};

export default MixedUse;
