import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./style.css";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";

gsap.registerPlugin(ScrollTrigger);

const Thankyou = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMatches(true);
    }
  }, []);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <div className="thankyou global-padding">
        <Link to="/" className="logo-container">
          <img
            className="logo"
            src="images/logo/logo-white.png"
            alt="Crescent Legacy logo"
          />
        </Link>
        <Grid
          container
          flex={1}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Grid container>
            <Grid size={{ md: 6 }}>
              <h2>Thank You For Registering.</h2>
            </Grid>
            <Grid size={{ md: 6 }}></Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 6 }}></Grid>
            <Grid size={{ md: 6 }}>
              <div className="description">
                You’ll be among the first to learn more details by joining the
                interest list. We will be in touch with more information soon.
              </div>
              <Link to="/" className="btn">
                Return to Homepage
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ReactLenis>
  );
};

export default Thankyou;
