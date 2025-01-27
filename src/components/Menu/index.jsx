import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav } from "../Data";
import Grid from "@mui/material/Grid2";
import "./style.css";

const Menu = ({ show, onShow }) => {
  return (
    <div
      className="menu"
      style={{ opacity: show ? 1 : 0, visibility: show ? "visible" : "hidden" }}
    >
      <ul>
        {nav.map((navObj, index) => {
          return (
            <li key={index}>
              <NavLink to={navObj.path} className="nav" onClick={onShow}>
                {navObj.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
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
  );
};

export default Menu;
