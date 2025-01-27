import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner";
import Intro from "../../components/Intro";
import TextImg from "../../components/TextImg";
import ImgCard from "../../components/ImgCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "./style.css";

const Legacy = () => {
  const [matches, setMatches] = useState(false);
  const [matches599, setMatches599] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
    if (window.matchMedia("(max-width: 599px)").matches) {
      setMatches599(true);
    }
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, [location.pathname, matches]);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <main className="legacy">
        <Banner
          posterURL="/videos/legacy.jpg"
          videoURL="/videos/legacy.mp4"
          heading={
            matches
              ? [
                  "Giving classic",
                  "communities",
                  "new life through",
                  "remarkable vision.",
                ]
              : [
                  "Giving classic communities new life",
                  "through remarkable vision.",
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
            heading={["Legacy", "Collections"]}
            subheading="At Crescent Legacy, our passion is bringing value to the communities we love. That’s why we are proud to offer the Legacy Collection: a unique collection of heritage-inspired homes throughout the Lower Mainland. "
            description="Combining innovative vision with careful planning, we restore and repurpose heritage homes in a way that respects their original character, while infusing them with principles of modern design. As a result, Legacy Collection homes provide the best of both worlds: coveted contemporary living within classic neighbourhood settings."
          />
          <Box sx={{ flexGrow: 1 }} className="Harlowe-house global-padding">
            <TextImg
              heading={["Harlowe", "House"]}
              description="Experience a new chapter of luxury living in Vancouver’s Westside at Harlowe House. Inspired by Craftsman and Tudor Revival era design and architecture, it exudes the timeless ideals of single-family living while offering all the urban comforts the Oakridge community has to offer. "
              btnRoute="https://harlowehouse.ca"
              btnNewTab="1"
              btnContent="View Featured Project"
              newTab="1"
              route="https://harlowehouse.ca"
              imgPath="/images/legacy/Harlowe.jpg"
              sellStatus="Now Selling"
              title="Harlowe House"
              location="Vancouver | West Side"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} className="legacy-gallery global-padding">
            <Grid
              container
              columnSpacing={{ md: 2, xl: 4 }}
              rowSpacing={{ md: 4, xl: 8 }}
              className="row"
            >
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="1"
                  route="https://crescentlegacy.com/ascot/"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/1.jpg"
                      : "/images/legacy/gallery/1.jpg"
                  }
                  sellStatus="Now Selling"
                  title="Ascot"
                  location="Vancouver | West Side"
                />
              </Grid>
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="0"
                  route="/contact"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/2.jpg"
                      : "/images/legacy/gallery/2.jpg"
                  }
                  sellStatus="Coming Soon"
                  title="Linden House"
                  location="Vancouver | West Side"
                />
              </Grid>
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="0"
                  route="/contact"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/3.jpg"
                      : "/images/legacy/gallery/3.jpg"
                  }
                  sellStatus="Coming Soon"
                  title="New Brighton Homes"
                  location="Vancouver | East Side"
                />
              </Grid>
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="0"
                  route="/contact"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/6.jpg"
                      : "/images/legacy/gallery/6.jpg"
                  }
                  sellStatus="Coming Soon"
                  title="Paton Homes"
                  location="Vancouver | West Side"
                />
              </Grid>
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="0"
                  route="/contact"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/5.jpg"
                      : "/images/legacy/gallery/5.jpg"
                  }
                  sellStatus="Coming Soon"
                  title="Nanton House"
                  location="Vancouver | West Side"
                />
              </Grid>
              <Grid size={6} className="wrapper">
                <ImgCard
                  newTab="0"
                  route="/contact"
                  imgPath={
                    matches599
                      ? "/images/legacy/gallery-m/4.jpg"
                      : "/images/legacy/gallery/4.jpg"
                  }
                  sellStatus="Coming Soon"
                  title="Laburnum House"
                  location="Vancouver | West Side"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ReactLenis>
  );
};

export default Legacy;
