import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

const Intro = ({ heading, subheading, description }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="intro global-padding">
      <LineAppear>
        <div className="line-appear"></div>
      </LineAppear>
      <Grid container className="row">
        <Grid size={{ sm: 6 }}>
          <TextAppear>
            <h2>
              {heading.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </h2>
          </TextAppear>
        </Grid>
        <Grid size={{ sm: 6 }}>
          <h3>{subheading}</h3>
          <TextAppear>
            <p>{description}</p>
          </TextAppear>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
