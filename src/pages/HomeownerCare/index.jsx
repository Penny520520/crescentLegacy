import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "../../components/Banner";
import RegisterForm from "../../components/RegisterForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import NumAppear from "../../components/anime/NumAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

const HomeownerCare = () => {
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
      <main className="homeowner">
        <Banner
          posterURL="/videos/homeownercare.jpg"
          videoURL="/videos/homeownercare.mp4"
          heading={
            matches
              ? [
                  "Exceptional care and",
                  "lasting service that",
                  "homeowners",
                  "can always rely on.",
                ]
              : [
                  "Exceptional care and lasting service that",
                  "homeowners can always rely on.",
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
          <Box
            sx={{ flexGrow: 1 }}
            className="homeowner-care imgtext global-padding"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <div className="container">
              <TextAppear>
                <h2>Homeowner Care</h2>
              </TextAppear>
              <Grid container className="row">
                <Grid size={{ md: 5 }}>
                  <img
                    src="/images/homeowner-care.jpg"
                    alt="homeowner-care.jpg"
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <h3>
                    At Crescent Legacy, we are deeply committed to building
                    quality homes so you feel the pride of ownership for years
                    to come. We’re also equally committed to delivering
                    unparalleled and long-lasting service to match.
                  </h3>
                  <TextAppear>
                    <p>
                      All of our homes include a 2-year guarantee on materials
                      and labour, a 5-year guarantee on building envelope, and a
                      10-year guarantee on building structural defects. <br />
                      <Link
                        to="https://www.bchousing.org/sites/default/files/media/documents/Home-Warranty-Insurance-in-BC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here
                      </Link>{" "}
                      to learn more about the home warranty that protects your
                      investment.
                    </p>
                  </TextAppear>
                  <Grid container className="row">
                    <Grid size={{ md: 4 }} className="wrapper">
                      <NumAppear>
                        <div className="num">2</div>
                      </NumAppear>
                      <div className="subtitle years">Years</div>
                      <div className="subtitle">
                        On labour and materials <br />
                        (some limits apply)
                      </div>
                    </Grid>
                    <Grid size={{ md: 4 }} className="wrapper">
                      <NumAppear>
                        <div className="num">5</div>
                      </NumAppear>
                      <div className="subtitle years">Years</div>
                      <div className="subtitle">
                        On the building envelope, <br />
                        including water penetration
                      </div>
                    </Grid>
                    <Grid size={{ md: 4 }} className="wrapper">
                      <NumAppear>
                        <div className="num">10</div>
                      </NumAppear>
                      <div className="subtitle years">Years</div>
                      <div className="subtitle">On the structure</div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            className="online-service imgtext global-padding"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <TextAppear>
              {matches ? (
                <h2>Online Service Request</h2>
              ) : (
                <h2>
                  Online Service
                  <br />
                  Request
                </h2>
              )}
            </TextAppear>
            <Grid container className="row">
              <Grid size={{ md: 4 }} className="left">
                <TextAppear>
                  <p>
                    We have a dedicated customer service team that will be there
                    whenever you need to ensure you are satisfied with every
                    aspect of your home. To get in touch with one of our
                    customer service team members, complete an online service
                    request. Or you can always reach us by email at{" "}
                    <Link to="mailto:info@crescentlegacy.com">
                      info@crescentlegacy.com
                    </Link>
                    .
                  </p>
                </TextAppear>
              </Grid>
              <Grid size={{ md: 7 }}>
                <RegisterForm />
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ReactLenis>
  );
};

export default HomeownerCare;
