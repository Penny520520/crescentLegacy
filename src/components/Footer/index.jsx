import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "./style.css";

const Footer = () => {
  const [height, setHeight] = useState(0);
  const [delay, setDelay] = useState(0);
  const [matches, setMatches] = useState(false);
  const location = useLocation();
  const el = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
    setHeight(el.current.clientHeight);
    window.addEventListener("resize", () => {
      setHeight(el.current.clientHeight);
    });
    location.pathname === "/" ? setDelay(4) : setDelay(0);
    let ctx = gsap.context(() => {
      gsap.to(".footer-container", {
        opacity: 1,
        ease: "power2.easeOut",
        delay: delay,
        duration: 0.1,
      });
    });
    return () => ctx.revert();
  }, [location.pathname, delay]);

  return (
    <div className="footer-container">
      <div className="extra-space" style={{ height: height }}></div>
      <Box ref={el} sx={{ flexGrow: 1 }} className="footer global-padding">
        <div className="row-wrapper mobile">
          <Grid container className="row">
            <Grid className="contact">
              <div className="footer-title">Contact</div>
              <p className="address">
                #450-1580 West Broadway
                <br /> Vancouver, BC, Canada
              </p>
              <p>
                <Link to="mailto:info@crescentlegacy.com" className="email">
                  info@crescentlegacy.com
                </Link>
                <br /> +1 236 866 6816
              </p>
              <Link to="/contact" className="btn">
                Get In Touch
              </Link>
            </Grid>
            <Grid className="social">
              <div className="footer-title">Social</div>
              <div className="wrapper">
                <Link to="" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
                <Link to="" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Link>
                <Link to="" target="_blank" rel="noopener noreferrer">
                  RedNote
                </Link>
              </div>
            </Grid>
          </Grid>
          <Link to="/" className="">
            <img
              className="logo"
              src="/images/logo/footer-logo.png"
              alt="Crescent Legacy Logo"
            />
          </Link>
          <Grid container className="row">
            <div className="copyright">2025 © CRESCENT LEGACY PROPERTIES</div>
            <Link className="privacy" to="/privacy">
              Privacy policy
            </Link>
            <Link
              className="alab"
              to="https://www.alabcreative.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site by alab creative
            </Link>
          </Grid>
        </div>
        {/* ) : ( */}
        <div className="row-wrapper desktop">
          <Grid container className="row">
            <Grid size={{ md: 7 }}>
              <Link to="/" className="">
                <img
                  className="logo"
                  src="/images/logo/footer-logo.png"
                  alt="Crescent Legacy Logo"
                />
              </Link>
            </Grid>
            <Grid size={{ md: 5 }}>
              <Grid container className="row">
                <Grid size={{ md: 5 }} className="contact">
                  <div className="footer-title">Contact</div>
                  <p className="address">
                    #450-1580 West Broadway
                    <br /> Vancouver, BC, Canada
                  </p>
                  <p>
                    <Link to="mailto:info@crescentlegacy.com" className="email">
                      info@crescentlegacy.com
                    </Link>
                    <br /> +1 236 866 6816
                  </p>
                </Grid>
                <Grid size={{ md: 3 }} className="social">
                  <div className="footer-title">Social</div>
                  <div className="wrapper">
                    <Link
                      to="https://www.instagram.com/crescent_legacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </Link>
                    <Link
                      to="https://www.facebook.com/p/Crescent-Legacy-Properties-100065283240155/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </Link>
                    <Link
                      to="https://www.xiaohongshu.com/user/profile/5c5d9453000000001d01a4e4?xsec_token=YBojCDxnS[…]pptime=1736200250&share_id=562d627d93c74c2aabf984f1b69718f6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RedNote
                    </Link>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <p>
                    Are you interested in a property or have any other
                    inquiries?
                  </p>
                  <Link to="/contact" className="btn">
                    Get In Touch
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="row">
            <Grid size={{ md: 6 }}>
              <div className="copyright">2025 © CRESCENT LEGACY PROPERTIES</div>
            </Grid>
            <Grid size={{ md: 6 }}>
              <div className="wrapper">
                <Link className="privacy" to="/privacy">
                  Privacy policy
                </Link>
                <Link
                  className="alab"
                  to="https://www.alabcreative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  site by alab creative
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* )} */}
      </Box>
    </div>
  );
};

export default Footer;
