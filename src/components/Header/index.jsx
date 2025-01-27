import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Menu from "../Menu";
import { nav } from "../Data";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "./style.css";

const Header = ({ props }) => {
  const location = useLocation();
  const [matches, setMatches] = useState(false);
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState({
    scroll: 0,
    background: "transparent",
    logoPath: "/images/logo/logo-white.png",
    navColor: "#FFFFFF",
    transform: "translateY(0%)",
  });

  // const [scroll, setScroll] = useState(0);
  let scrollPos = 0;

  useLenis(({ scroll }) => {
    if (scroll === 0) {
      setHeader({
        scroll: 0,
        background: "transparent",
        logoPath: "/images/logo/logo-white.png",
        navColor: "#FFFFFF",
        transform: "translateY(0%)",
      });
    } else if (scroll > scrollPos) {
      setHeader({
        scroll: true,
        background: "#FFFFFF",
        logoPath: "/images/logo/logo-gold.png",
        navColor: "#413F3C",
        transform: "translateY(-100%)",
      });
    } else if (scroll < scrollPos) {
      setHeader({
        scroll: false,
        background: "#FFFFFF",
        logoPath: "/images/logo/logo-gold.png",
        navColor: "#413F3C",
        transform: "translateY(0%)",
      });
    }
    scrollPos = scroll;
  });

  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
    if (location.pathname === "/") {
      let ctx = gsap.context(() => {
        gsap.to("header", {
          opacity: 1,
          ease: "power2.easeOut",
          delay: 1.1,
          duration: 1,
        });
      });

      return () => ctx.revert();
    } else {
      let ctx = gsap.context(() => {
        gsap.set("header", {
          opacity: 1,
          ease: "power2.easeOut",
          duration: 1,
        });
      });

      return () => ctx.revert();
    }
  }, [location.pathname]);

  return (
    <header
      className="header"
      style={{
        opacity: header.opacity,
        transform: header.transform,
        background: header.background,
      }}
    >
      <Box
        sx={{ flexGrow: 1 }}
        className={
          header.scroll === 0
            ? "NavBar global-padding"
            : "NavBar scroll global-padding"
        }
      >
        <Grid container className="row">
          <Grid size={{ md: 4, lg: 6 }}>
            <Link to="/">
              <img
                className={header.scroll === 0 ? "logo" : "scroll logo"}
                src={show ? "/images/logo/logo-white.png" : header.logoPath}
                alt="Crescent Legacy logo"
                onClick={() => setShow(false)}
              />
            </Link>
          </Grid>
          <Grid size={{ md: 8, lg: 6 }}>
            {matches ? (
              <div
                className="burger"
                style={{ display: matches ? "block" : "none" }}
                onClick={() => setShow(!show)}
              >
                <div
                  className="line"
                  style={{
                    backgroundColor:
                      header.scroll === 0
                        ? "#FFFFFF"
                        : show
                        ? "#FFFFFF"
                        : "#413F3C",
                    marginBottom: show ? "-7px" : 0,
                    transform: show ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    backgroundColor:
                      header.scroll === 0
                        ? "#FFFFFF"
                        : show
                        ? "#FFFFFF"
                        : "#413F3C",
                    transform: show ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                ></div>
              </div>
            ) : (
              <div className="nav-wrapper">
                <ul>
                  {nav.map((navObj, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          to={navObj.path}
                          className="nav"
                          curr_index={index}
                          style={{
                            color: header.navColor,
                          }}
                        >
                          {navObj.text}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
      <Menu show={show} onShow={() => setShow(!show)} />
    </header>
  );
};

export default Header;
