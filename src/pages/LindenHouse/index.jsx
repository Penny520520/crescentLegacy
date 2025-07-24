import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "./Banner";
import TextImg from "../../components/TextImg";
import Intro from "./Intro";
import Location from "./Location";
import SwiperCarousel from "./SwiperCarousel";
import CustomizedAccordions from "../../components/Accordion";
import {
  locationImgs,
  locationImgsM,
  interiorImgsM,
  exteriorImgs,
  interiorImgs,
} from "../../components/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import NumAppear from "../../components/anime/NumAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";
import RegisterForm from "./RegisterForm";

const LindenHouse = () => {
  const [matches, setMatches] = useState(false);
  const [matches599, setMatches599] = useState(false);
  const [matches1700, setMatches1700] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
    if (window.matchMedia("(max-width: 599px)").matches) {
      setMatches599(true);
    }
    if (window.matchMedia("(max-width: 1700px)").matches) {
      setMatches1700(true);
    }
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, [location.pathname, matches]);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <main className="linden-house">
        <Banner
          url="/images/linden-house/bnr.jpg"
          heading={["Linden House | Shaughnessy"]}
          isProject={true}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
            backgroundColor: "#FFFDF6",
          }}
        >
          <Box sx={{ flexGrow: 1 }} className="intro-container global-padding">
            <Intro
              num="01"
              heading={
                matches599
                  ? ["Your Legacy of Luxury in Shaughnessy."]
                  : ["Your Legacy of Luxury", "in Shaughnessy."]
              }
              description={[
                "An exclusive collection of 6 impeccably designed multiplex residences, Linden House embodies the grace of timeless European architecture fused with contemporary sophistication—set in the heart of Shaughnessy, Vancouver’s most prestigious and storied neighbourhood.",
                "Stroll through tree-lined boulevards where heritage homes and manicured gardens whisper of enduring elegance. Just moments from your doorstep, discover a world of gourmet dining, designer boutiques, and refined amenities that define Vancouver’s most coveted lifestyle. Prestigious private schools—including York House, Little Flower Academy, and Vancouver College—are within close reach, with the University of British Columbia a short drive away. At Linden House, tranquil parkside living meets urban vibrancy, offering a rare and distinguished lifestyle where elegance, convenience, and prestige exist in perfect harmony.",
              ]}
            />
            <Grid
              container
              className="row projects-data"
              spacing={{ xs: 0, md: 10, lg: 10 }}
              columns={12}
            >
              <Grid
                size={{ xs: 12, sm: 12, md: 3.5, lg: 2.4 }}
                className="container-wrapper"
              >
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <Grid container className="content-wrapper">
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="heading">Status</div>
                    </Grid>
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="detail">Coming Soon</div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 3.5, lg: 2.4 }}
                className="container-wrapper"
              >
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <Grid container className="content-wrapper">
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="heading">Address</div>
                    </Grid>
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="detail">
                        4450 Maple Crescent, Vancouver, BC
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 3.5, lg: 2.4 }}
                className="container-wrapper"
              >
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <Grid container className="content-wrapper">
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="heading">
                        {matches599 ? "Completion" : "Project Completion"}
                      </div>
                    </Grid>
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="detail">Fall 2027</div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 3.5, lg: 2.4 }}
                className="container-wrapper"
              >
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <Grid container className="content-wrapper">
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="heading">Unit Type</div>
                    </Grid>
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="detail">3 - 4 Bedroom</div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 3.5, lg: 2.4 }}
                className="container-wrapper"
              >
                <div className="wrapper">
                  <LineAppear>
                    <div className="line-appear"></div>
                  </LineAppear>
                  <Grid container className="content-wrapper">
                    <Grid size={{ xs: 6, md: 12 }}>
                      <div className="heading">
                        Project {matches599 ? <br /> : null}Website
                      </div>
                    </Grid>
                    <Grid size={{ xs: 6, md: 12 }}>
                      <Link to="/" className="btn ">
                        Visit Website
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div style={{ backgroundColor: "#FDF8F2" }}>
            <Box
              sx={{ flexGrow: 1 }}
              className="location-container global-padding"
            >
              <Intro
                num="02"
                heading={["Location"]}
                description={[
                  "Set within Shaughnessy, Vancouver’s most coveted and historically rich neighborhood, Linden House embodies an unparalleled blend of heritage charm and modern refinement, offering an exclusive sanctuary of elegance.",
                ]}
              />
              <Location />
              <SwiperCarousel
                projects={matches599 ? locationImgsM : locationImgs}
                initialIndex="1"
              />
              {/* <div className="btn-wrapper">
                {matches ? (
                  <Link to="/legacy" className="btn mobile">
                    View All Legacy Projects
                  </Link>
                ) : null}
              </div> */}
            </Box>
            <Box
              sx={{ flexGrow: 1 }}
              className="formwerks-architecture global-padding"
            >
              <Intro
                num="03"
                heading={
                  matches1700
                    ? matches599
                      ? [
                          "Sophisticated European Charm,",
                          "Contemporary Elegance.",
                        ]
                      : ["Sophisticated European Charm, Contemporary Elegance."]
                    : [
                        "Sophisticated European Charm,",
                        "Contemporary Elegance.",
                      ]
                }
                description={[
                  "Designed in partnership with Formwerks Architecture, Linden House embodies European elegance with contemporary sophistication. Its timeless design features a grand façade, classic brickwork, and refined architectural detailing, seamlessly blending traditional charm with modern refinement. Nestled in Vancouver’s prestigious Shaughnessy neighborhood, Linden House stands as a distinguished landmark, harmonizing effortlessly with its historic tree-lined surroundings—a true expression of luxury built on legacy.",
                ]}
              />
              <img
                src="/images/linden-house/architecture.jpg"
                alt="Formwerks Architecture"
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} className="space global-padding">
              <Intro num="04" heading={["Exterior"]} />
              <SwiperCarousel projects={exteriorImgs} initialIndex="1" />
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exterior space global-padding">
              <Intro num="05" heading={["Interior"]} />
              <SwiperCarousel
                projects={matches599 ? interiorImgsM : interiorImgs}
                initialIndex="1"
              />
            </Box>
          </div>
          <Box
            sx={{ flexGrow: 1 }}
            className="register-section project-intro  imgtext global-padding"
            id="register"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <div className="num">06</div>
            <Grid container className="row">
              <Grid size={{ md: 3.3 }} className="left">
                <TextAppear>
                  <h2>Register</h2>
                  <p>
                    By registering, you will be among the first to receive the
                    latest news, exclusive offers and community updates.
                  </p>
                </TextAppear>
              </Grid>
              <Grid size={{ md: 7 }}>
                <RegisterForm />
              </Grid>
            </Grid>
          </Box>
          <div className="backto-allprojects">
            <Link to="/legacy" className="btn ">
              Back To All Projects
            </Link>
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export default LindenHouse;
