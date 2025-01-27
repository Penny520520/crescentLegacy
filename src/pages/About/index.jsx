import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Intro from "../../components/Intro";
import CustomizedAccordions from "../../components/Accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

const About = () => {
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
      <main className="about">
        <Banner
          posterURL="/videos/about.jpg"
          videoURL="/videos/about.mp4"
          heading={
            matches599
              ? [
                  "Proudly creating thriving",
                  "communities through",
                  "unmatched quality.",
                ]
              : [
                  "Proudly creating thriving communities",
                  "through unmatched quality.",
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
            heading={["Who We Are"]}
            subheading="With industry roots in single-family home construction, our legacy has grown to include an impressive portfolio of mixed-use condo and townhome developments, as well as character home restoration projects in Vancouver and across the Lower Mainland. "
            description="We also offer a complete range of construction and project management services. Recognized for exceptional quality, innovation and an unparalleled commitment to communities, at Crescent Legacy we turn visions into reality for our homeowners."
          />
          {matches ? (
            <Box
              sx={{ flexGrow: 1 }}
              className="approach-mobile imgtext global-padding"
            >
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
                  </Grid>
                </Grid>
              </div>
            </Box>
          ) : (
            <Box
              sx={{ flexGrow: 1 }}
              className="approach-desktop mobile imgtext global-padding"
            >
              <LineAppear>
                <div className="line-appear"></div>
              </LineAppear>
              <TextAppear>
                <h2>Our Approach</h2>
              </TextAppear>
              <Grid container className="row">
                <Grid size={{ md: 4 }}>
                  <img src="/images/home/approach.jpg" alt="our approach" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <Grid
                    container
                    columnSpacing={{ xs: 10, md: 10, lg: 10, xxl: 15 }}
                  >
                    <Grid size={6}>
                      <LineAppear>
                        <div className="line-appear"></div>
                      </LineAppear>
                      <div className="wrapper">
                        <div className="number">01</div>
                        <h3 className="heading">
                          Redefining the
                          <br />
                          meaning of home.
                        </h3>
                        <p>
                          A Crescent Legacy home is so much more than just
                          incredible design. Our homes are thoughtfully
                          developed to create places that help people connect,
                          evolve and thrive. We achieve this mission through a
                          standard of exceptional design, an intuitive
                          understanding of modern homeowners and a building
                          process that carefully oversees every step of
                          construction.
                        </p>
                      </div>
                    </Grid>
                    <Grid size={6}>
                      <LineAppear>
                        <div className="line-appear"></div>
                      </LineAppear>
                      <div className="wrapper">
                        <div className="number">02</div>
                        <h3 className="heading">
                          Creating vibrant and
                          <br />
                          livable communities.
                        </h3>
                        <p>
                          Specializing in urban real estate projects, we know
                          that everything we do has lasting impact. That’s why
                          we take our role in shaping communities very
                          seriously. We work closely with municipalities and
                          community partners to create homes that enhance their
                          surroundings. By integrating our homes into the
                          community, we create a more vibrant and rewarding
                          lifestyle for homeowners and neighbours alike.
                        </p>
                      </div>
                    </Grid>
                    <Grid size={6} className="nopadding">
                      <LineAppear>
                        <div className="line-appear"></div>
                      </LineAppear>
                      <div className="wrapper">
                        <div className="number">03</div>
                        <h3 className="heading">
                          Hands-on approach
                          <br />
                          from start to finish.
                        </h3>
                        <p>
                          We employ a unique hands-on approach that encompasses
                          every aspect of the process, from land acquisition to
                          architecture and design, as well as construction and
                          homeowner service. This commitment ensures our
                          homeowners and investors are getting the best quality
                          and service possible at all stages. Further, we keep a
                          close eye on the latest innovations and market trends,
                          allowing us to continually redefine smart living for
                          homeowners.
                        </p>
                      </div>
                    </Grid>
                    <Grid size={6} className="nopadding">
                      <LineAppear>
                        <div className="line-appear"></div>
                      </LineAppear>
                      <div className="wrapper">
                        <div className="number">04</div>
                        <h3 className="heading">
                          Leading the way
                          <br />
                          with excellence.
                        </h3>
                        <p>
                          Led by market veterans, the Crescent Legacy team
                          offers a wealth of expertise that’s grounded in
                          knowledge and integrity. Above all, we’re deeply
                          passionate and driven by a desire to deliver
                          outstanding projects. We’ve also achieved
                          award-winning results as the proud recipient of
                          Ovation Awards from Homebuilders Association Vancouver
                          and Georgie Awards nominations from the Canadian Home
                          Builders’ Association of BC.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} className="presence global-padding">
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <Grid container className="row">
              <Grid size={{ md: 4 }}>
                <TextAppear>
                  <h2>Our Presence</h2>
                  <p className="detail">
                    Location is the cornerstone of our remarkable living spaces.
                    Explore our past, current and upcoming projects citywide.
                  </p>
                  {matches ? (
                    <img src="/images/about/location.png" alt="location" />
                  ) : null}
                  <p className="wrapper">
                    <span className="circle"></span>Legacy Collections
                  </p>
                  <Link to="/legacy" className="btn">
                    View All Legacy Projects
                  </Link>
                  <p className="wrapper">
                    <span className="circle black"></span>Mixed-Use Developments
                  </p>
                  <Link to="/mixed-use" className="btn">
                    View All Mixed-Use Projects
                  </Link>
                </TextAppear>
              </Grid>
              <Grid size={{ md: 8 }}>
                {matches ? null : (
                  <img src="/images/about/location.png" alt="location" />
                )}
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            className="construction imgtext global-padding"
          >
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <div className="container">
              <TextAppear>
                {matches599 ? (
                  <h2>
                    Construction <br /> Service
                  </h2>
                ) : (
                  <h2>Construction Service</h2>
                )}
              </TextAppear>
              {matches ? (
                <h3>
                  From multiple conversion dwellings to boutique heritage-home
                  restoration, we offer a wide range of project management and
                  construction services.{" "}
                </h3>
              ) : null}
              <Grid container className="row">
                <Grid size={{ md: 4 }} className="left">
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
                </Grid>
                <Grid size={{ md: 6 }}>
                  {matches ? null : (
                    <h3>
                      From multiple conversion dwellings to boutique
                      heritage-home restoration, we offer a wide range of
                      project management and construction services.{" "}
                    </h3>
                  )}
                  <TextAppear>
                    <p>
                      No matter what the scope, we’ll partner with you and
                      provide comprehensive services to help envision, plan and
                      execute your project to perfection.
                    </p>
                  </TextAppear>
                  <TextAppear>
                    <p className="second-para">
                      At the core of our services, we administer subcontracts
                      and coordinate construction from the outset through to
                      delivery. Through every aspect of project planning, our
                      in-house construction management services team maintains
                      careful hands-on involvement. That way, we’re able to
                      carefully monitor cost, quality and timelines to ensure
                      the best results, without compromise.
                    </p>
                  </TextAppear>
                  {matches ? null : (
                    <TextAppear>
                      <Link to="/contact" className="btn">
                        Get In Touch
                      </Link>
                    </TextAppear>
                  )}
                </Grid>
              </Grid>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="leadership global-padding">
            <LineAppear>
              <div className="line-appear"></div>
            </LineAppear>
            <Grid container className="row">
              <Grid size={{ md: 4 }} className="left">
                <TextAppear>
                  <h2>Leadership</h2>
                </TextAppear>
                <p className="">
                  Our close-knit team brings decades of local development
                  expertise to the table. By partnering with leading architects
                  and designers, we’ve pioneered a fresh approach to
                  homebuilding. The result is a collection of unique homes born
                  from these dynamic collaborations.
                </p>
              </Grid>
              <Grid size={{ md: 8 }} className="right">
                <Grid
                  container
                  columnSpacing={{ xs: 5, sm: 5, md: 5, xl: 15 }}
                  rowSpacing={{ xs: 3, sm: 3, md: 3, xl: 10 }}
                  className="row"
                >
                  <Grid size={{ md: 5, lg: 6 }}>
                    <img src="/images/about/Tony.jpg" alt="Tony" />
                  </Grid>
                  <Grid size={{ md: 7, lg: 6 }}>
                    <div className="wrapper">
                      <TextAppear>
                        <h3 className="heading">Tony Chen</h3>
                        <p className="profession">Co-Founder & President</p>
                        <p className="first-para">
                          With over 10 years of industry experience, Tony’s
                          comprehensive leadership encompasses every stage of
                          our operations and includes a broad range of expertise
                          including land acquisition, development and
                          construction management, marketing, sales and project
                          financing.
                        </p>
                        <p className="second-para">
                          What truly sets Tony apart is his unique hands-on
                          approach to project management and leadership. Tony
                          takes great pride in carefully collaborating with the
                          rest of our team at every stage of planning and as a
                          result, ensures the highest quality possible for our
                          projects.
                        </p>
                      </TextAppear>
                    </div>
                  </Grid>
                  {matches ? null : (
                    <Grid size={{ md: 7, lg: 6 }}>
                      <div className="wrapper">
                        <TextAppear>
                          <h3 className="heading">Val Zhang</h3>
                          <p className="profession">
                            Co-Founder & Vice-President
                          </p>
                          <p className="first-para">
                            Val’s strong vision and philosophy drives Crescent
                            Legacy to continually innovate and build on its
                            success. Working closely with Tony, Val is an
                            integral member of the team, providing leadership
                            for marketing, construction management and investor
                            management.
                          </p>
                          <p className="second-para">
                            Passionate about bringing new life to communities,
                            Val believes that desirable homes are the foundation
                            of our lives. With that aim in mind, her vision
                            combines contemporary style with modern conveniences
                            to create homes that will be valued both as a place
                            to live today and as an investment for the future.
                          </p>
                        </TextAppear>
                      </div>
                    </Grid>
                  )}
                  <Grid size={{ md: 5, lg: 6 }}>
                    <img src="/images/about/Val.jpg" alt="Val" />
                  </Grid>
                  {matches ? (
                    <Grid size={{ md: 7, lg: 6 }} className="nomargin">
                      <div className="wrapper">
                        <TextAppear>
                          <h3 className="heading">Val Zhang</h3>
                          <p className="profession">
                            Co-Founder & Vice-President
                          </p>
                          <p className="first-para">
                            Val’s strong vision and philosophy drives Crescent
                            Legacy to continually innovate and build on its
                            success. Working closely with Tony, Val is an
                            integral member of the team, providing leadership
                            for marketing, construction management and investor
                            management.
                          </p>
                          <p className="second-para">
                            Passionate about bringing new life to communities,
                            Val believes that desirable homes are the foundation
                            of our lives. With that aim in mind, her vision
                            combines contemporary style with modern conveniences
                            to create homes that will be valued both as a place
                            to live today and as an investment for the future.
                          </p>
                        </TextAppear>
                      </div>
                    </Grid>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ReactLenis>
  );
};

export default About;
