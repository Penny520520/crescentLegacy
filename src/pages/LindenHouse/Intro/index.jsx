import React from "react";
import LineAppear from "../../../components/anime/LineAppear";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../../components/anime/TextAppear";
import "./style.css";

const Intro = ({ num, heading, description }) => {
  return (
    <div className="project-intro intro">
      <LineAppear>
        <div className="line-appear"></div>
      </LineAppear>
      <div className="num">{num}</div>
      <Grid container className="row">
        <Grid size={{ xs: 12, md: 6 }}>
          <TextAppear>
            <h2>
              {heading.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h2>
          </TextAppear>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className="description">
          {description &&
            description.map((item, index) => <p key={index}>{item}</p>)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
