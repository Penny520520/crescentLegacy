import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "../../components/Banner";
import RegisterFormContact from "../../components/RegisterFormContact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

const Contact = () => {
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
          posterURL="/videos/contact.jpg"
          videoURL="/videos/contact.mp4"
          heading={
            matches
              ? [
                  "As a developer",
                  "that always puts",
                  "community first we want",
                  "to hear from you.",
                ]
              : [
                  "As a developer that always puts community first,",
                  "we want to hear from you.",
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
            className="get-in-touch imgtext global-padding"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <div className="container">
              <Grid container className="row">
                <Grid size={{ md: 5 }}>
                  <TextAppear>
                    <h2>Get In Touch</h2>
                  </TextAppear>
                </Grid>
                <Grid size={{ md: 6 }}>
                  <h3>
                    Questions about Crescent Legacy or the homes and communities
                    we create?
                  </h3>
                  <p>
                    We want to hear from you. Get in touch with one of our
                    experts today.
                  </p>

                  <Grid container className="row projects-data">
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <div className="wrapper">
                        <LineAppear>
                          <div className="line-appear"></div>
                        </LineAppear>
                        <div className="heading">Address</div>
                        <div className="content">
                          #450-1580 West Broadway
                          <br />
                          Vancouver, BC, Canada
                        </div>
                        <Link
                          to="https://www.google.com/maps/place/1580+W+Broadway,+Vancouver,+BC+V6J+5K9/@49.2634722,-123.1430423,17z/data=!3m1!4b1!4m6!3m5!1s0x548673b877a039b7:0xd576a628a4daf869!8m2!3d49.2634722!4d-123.140462!16s%2Fg%2F11c2byklgl?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          View Map
                        </Link>
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <div className="wrapper second-wrapper">
                        <LineAppear>
                          <div className="line-appear"></div>
                        </LineAppear>
                        <div className="heading">Contact</div>
                        <div className="content">
                          <Link
                            to="mailto:info@crescentlegacy.com"
                            className="email"
                          >
                            info@crescentlegacy.com
                          </Link>
                          <br />
                          +1 236 866 6816
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            className="stay-upto-date imgtext global-padding"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <TextAppear>
              <h2>Stay Up To Date</h2>
            </TextAppear>
            <Grid container className="row">
              <Grid size={{ md: 3 }} className="left">
                <TextAppear>
                  <p>
                    Get the latest news about Crescent Legacy’s communities and
                    be the first to receive special offers and community
                    updates.
                  </p>
                </TextAppear>
              </Grid>
              <Grid size={{ md: 7 }}>
                <RegisterFormContact />
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ReactLenis>
  );
};

export default Contact;
