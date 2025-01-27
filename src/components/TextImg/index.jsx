import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ImgCard from "../ImgCard";
import TextAppear from "../anime/TextAppear";
import LineAppear from "../anime/LineAppear";
import Grid from "@mui/material/Grid2";
import "./style.css";

const TextImg = ({
  heading,
  description,
  btnRoute,
  btnNewTab,
  btnContent,
  newTab,
  route,
  imgPath,
  sellStatus,
  title,
  location,
}) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setMatches(true);
    }
  }, []);
  return (
    <div className="textimg-container">
      <LineAppear>
        <div className="line-appear"></div>
      </LineAppear>
      <Grid container className="text-img row">
        <Grid size={{ md: 4 }}>
          <TextAppear>
            <h2>
              {heading.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </h2>
            <p>{description}</p>
            {matches ? null : (
              <Link
                to={btnRoute}
                className="btn"
                target={Number(btnNewTab) ? "_blank" : ""}
              >
                {btnContent}
              </Link>
            )}
          </TextAppear>
        </Grid>
        <Grid size={{ md: 8 }}>
          <ImgCard
            newTab={newTab}
            route={route}
            imgPath={imgPath}
            sellStatus={sellStatus}
            title={title}
            location={location}
          />
        </Grid>
      </Grid>
      <div className="btn-wrapper">
        {matches ? (
          <Link to={btnRoute} className="btn">
            {btnContent}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TextImg;
