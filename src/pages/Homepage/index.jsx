import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LandingAnimate from "../../components/LandingAnimate";
import Banner from "../../components/Banner";
import TextImg from "../../components/TextImg";
import SwiperCarousel from "../../components/SwiperCarousel";
import CustomizedAccordions from "../../components/Accordion";
import RegisterForm from "../../components/RegisterForm";
import { legacyProjects } from "../../components/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import NumAppear from "../../components/anime/NumAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

const Homepage = () => {
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
    let ctx = gsap.context(() => {
      gsap.to(".home", {
        opacity: 1,
        ease: "power2.easeOut",
        delay: 1,
        duration: 0.8,
      });
    });
    return () => ctx.revert();
  }, [location.pathname, matches]);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <LandingAnimate />
      <main className="home">
        <Banner
          posterURL="/videos/home.jpg"
          videoURL="/videos/home.mp4"
          heading={
            matches599
              ? ["Building legacies", "through", "exceptional quality."]
              : ["Building legacies through", "exceptional quality."]
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
          <Box sx={{ flexGrow: 1 }} className="intro global-padding">
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <Grid container className="row">
              <Grid size={{ sm: 6 }}>
                <TextAppear>
                  <h2>About Us</h2>
                </TextAppear>
              </Grid>
              <Grid size={{ sm: 6 }}>
                <h3>
                  As a leading Vancouver real estate developer, Crescent Legacy
                  is creating a new standard of high-quality homes that provide
                  optimal value to homeowners and transform urban communities.
                </h3>
                <Link to="/about" className="btn">
                  Our Story
                </Link>
              </Grid>
            </Grid>
            <Grid container className="row projects-data">
              <Grid size={{ xs: 12, sm: 6 }}>
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <div className="heading">Now Selling Projects</div>
                  <Grid container className="row">
                    <Grid size={{ sm: 3 }}>
                      <NumAppear>
                        <div className="num">5</div>
                      </NumAppear>
                      <div className="subtitle">Projects</div>
                    </Grid>
                    <Grid size={{ sm: 4 }}>
                      <NumAppear>
                        <div className="num">56</div>
                      </NumAppear>
                      <div className="subtitle">Units</div>
                    </Grid>
                    <Grid size={{ sm: 5 }}>
                      <NumAppear>
                        <div className="num">84,829</div>
                      </NumAppear>
                      <div className="subtitle">Total SQFT</div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} className="right">
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <div className="heading">Upcoming Projects</div>
                  <Grid container className="row">
                    <Grid size={{ sm: 3 }}>
                      <NumAppear>
                        <div className="num">4</div>
                      </NumAppear>
                      <div className="subtitle">Projects</div>
                    </Grid>
                    <Grid size={{ sm: 4 }}>
                      <NumAppear>
                        <div className="num">15</div>
                      </NumAppear>
                      <div className="subtitle">Units</div>
                    </Grid>
                    <Grid size={{ sm: 5 }}>
                      <NumAppear>
                        <div className="num">51,827</div>
                      </NumAppear>
                      <div className="subtitle">Total SQFT</div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            className="legacy-collections global-padding"
          >
            <TextImg
              heading={["Legacy", "Collections"]}
              description="At Crescent Legacy, our passion is bringing value to the communities we love. That’s why we are proud to offer the Legacy Collection: a unique collection of heritage-inspired homes throughout the Lower Mainland."
              btnRoute="/legacy"
              btnNewTab="0"
              btnContent="View All Legacy Projects"
              newTab="1"
              route="https://harlowehouse.ca/"
              imgPath="/images/home/Harlowe.jpg"
              sellStatus="Now Selling"
              title="Harlowe House"
              location="Vancouver | West Side"
            />
            <SwiperCarousel projects={legacyProjects} initialIndex="1" />
            <div className="btn-wrapper">
              {matches ? (
                <Link to="/legacy" className="btn mobile">
                  View All Legacy Projects
                </Link>
              ) : null}
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="mixed-use global-padding">
            <TextImg
              heading={["Mixed-Use", "Developments"]}
              description="At Crescent Legacy, we don’t just build homes, we build communities. With this in mind, all of our multi-family communities are founded on principles of quality design aimed to enrich the lives of both residents and neighbours alike."
              btnRoute="/mixed-use"
              btnContent="View All Mixed-Use Projects"
              newTab="1"
              route="https://ownava.com/"
              imgPath="/images/home/Ava-hero.jpg"
              sellStatus="75% Sold"
              title="Ava"
              location="Vancouver | West Side"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} className="approach imgtext global-padding">
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <div className="container">
              <TextAppear>
                <h2>Our Approach</h2>
              </TextAppear>
              <Grid container className="row">
                <Grid size={{ md: 4 }}>
                  <img src="/images/home/approach.jpg" alt="our approach" />
                </Grid>
                <Grid size={{ md: 6 }} className="right">
                  <CustomizedAccordions />
                  <div className="btn-wrapper">
                    <Link to="/about" className="btn">
                      Learn More
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Box>
          <div className="construction is-relative">
            <div className="bg-video-container">
              <video
                className="bg-video"
                poster="/videos/construction.jpg"
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/construction.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="wrapper">
              <TextAppear>
                {matches ? (
                  <h2>
                    Construction <br /> Service
                  </h2>
                ) : (
                  <h2>Construction Service</h2>
                )}
                <p>
                  From multiple conversion dwellings to boutique heritage-home
                  restoration, we offer a wide range of project management and
                  construction services. No matter what the scope, we’ll partner
                  with you and provide comprehensive services to help envision,
                  plan and execute your project to perfection.
                </p>
                <Link to="/about" className="btn">
                  Learn More
                </Link>
              </TextAppear>
            </div>
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export default Homepage;
