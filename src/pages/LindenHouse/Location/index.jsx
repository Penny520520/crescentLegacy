import { useEffect, useState } from "react";
import { locationMap } from "../../../components/Data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import Grid from "@mui/material/Grid2";

const Location = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [currIndex, setCurrIndex] = useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    switch (panel) {
      case "panel1":
        setCurrIndex(1);
        break;
      case "panel2":
        setCurrIndex(2);
        break;
      case "panel3":
        setCurrIndex(3);
        break;
      case "panel4":
        setCurrIndex(4);
        break;
      case "panel5":
        setCurrIndex(5);
        break;
      default:
        setCurrIndex(0);
        break;
    }
  };

  return (
    <section className="location-section">
      <Grid container className="row" spacing={16}>
        <Grid size={{ sm: 7.5 }}>
          <Grid container className="row" spacing={5}>
            <Grid size={{ sm: 9 }}>
              <div className="map is-relative">
                <img
                  src="../images/linden-house/location/map/Linden House_Map_Base.png"
                  alt="Shannon Lynn_Map"
                />
                <img
                  className="active-map"
                  src={locationMap[currIndex].path}
                  alt={locationMap[0].name}
                />
              </div>
            </Grid>
            <Grid size={{ sm: 3 }}>
              <ul className="details desktop-map-details">
                <li className="detail-wrapper is-flex">
                  <img
                    loading="lazy"
                    className="arrow-icon"
                    src="images/linden-house/location/arrow.png"
                    alt="arrow icon"
                  />
                  <h3 className="is-flex">
                    <span className="min-num">10</span>
                    <span className="min">
                      Min Drive to
                      <span className="location">Downtown</span>
                    </span>
                  </h3>
                </li>
                <li className="detail-wrapper is-flex">
                  <img
                    loading="lazy"
                    className="arrow-icon"
                    src="images/linden-house/location/arrow.png"
                    alt="arrow icon"
                  />
                  <h3 className="is-flex">
                    <span className="min-num">12</span>
                    <span className="min">
                      Min Drive to
                      <span className="location">UBC</span>
                    </span>
                  </h3>
                </li>
                <li className="detail-wrapper is-flex">
                  <img
                    loading="lazy"
                    className="arrow-icon"
                    src="images/linden-house/location/arrow.png"
                    alt="arrow icon"
                  />
                  <h3 className="is-flex">
                    <span className="min-num">15</span>
                    <span className="min">
                      Min Drive to
                      <span className="location">YVR Airport</span>
                    </span>
                  </h3>
                </li>
                <li className="detail-wrapper is-flex">
                  <img
                    loading="lazy"
                    className="arrow-icon"
                    src="images/linden-house/location/arrow.png"
                    alt="arrow icon"
                  />
                  <h3 className="is-flex">
                    <span className="min-num">15</span>
                    <span className="min">
                      Min Drive to
                      <span className="location">Richmond</span>
                    </span>
                  </h3>
                </li>
                <li className="detail-wrapper is-flex">
                  <img
                    loading="lazy"
                    className="arrow-icon"
                    src="images/linden-house/location/arrow.png"
                    alt="arrow icon"
                  />
                  <h3 className="is-flex">
                    <span className="min-num">18</span>
                    <span className="min">
                      Min Drive to
                      <span className="location">Burnaby</span>
                    </span>
                  </h3>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ sm: 4, lg: 3.3 }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="span">Park & Recreation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    <p>1. Quilchena Park</p>
                  </li>
                  <li>
                    <p>2. VanDusen Botanical Garden</p>
                  </li>
                  <li>
                    <p>3. Devonshire Park</p>
                  </li>
                  <li>
                    <p>4. Shaughnessy Park</p>
                  </li>
                  <li>
                    <p>5. Angus Park</p>
                  </li>
                  <li>
                    <p>6. Trafalgar Park</p>
                  </li>
                  <li>
                    <p>7. Prince of Wales Park</p>
                  </li>
                  <li>
                    <p>8. Granville Park</p>
                  </li>
                  <li>
                    <p>9. Douglas Park</p>
                  </li>
                  <li>
                    <p>10. Queen Elizabeth Park</p>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="span">Membership Club</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    <p>11. The Arbutus Club</p>
                  </li>
                  <li>
                    <p>12. Vancouver Lawn Tennis Club</p>
                  </li>
                  <li>
                    <p>13. Langara Golf Course</p>
                  </li>
                  <li>
                    <p>14. Southlands Riding Club</p>
                  </li>
                  <li>
                    <p>15. Marine Drive Golf Club</p>
                  </li>
                  <li>
                    <p>16. Vancouver Racquets Clue</p>
                  </li>
                  <li>
                    <p>17. False Creek Public Tennis Club</p>
                  </li>
                  <li>
                    <p>18. Altea: West 6</p>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="span">Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    <p>19. York House School</p>
                  </li>
                  <li>
                    <p>20. Little Flower Academy</p>
                  </li>
                  <li>
                    <p>21. Prince of Wales Secondary School</p>
                  </li>
                  <li>
                    <p>22. Point Grey Secondary School</p>
                  </li>
                  <li>
                    <p>23. Vancouver College</p>
                  </li>
                  <li>
                    <p>24. Crofton House School</p>
                  </li>
                  <li>
                    <p>25. Kerrisdale Elementary School</p>
                  </li>
                  <li>
                    <p>26. Magee Secondary School</p>
                  </li>
                  <li>
                    <p>27. Trafalgar Elementary School</p>
                  </li>
                  <li>
                    <p>28. Langara College </p>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="span">Dining</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    <p>29. AnnaLena</p>
                  </li>
                  <li>
                    <p>30. Seasons in the Park</p>
                  </li>
                  <li>
                    <p>31. Octopus’ Garden Restaurant</p>
                  </li>
                  <li>
                    <p>32. Au Comptoir</p>
                  </li>
                  <li>
                    <p>33. TurF Kitsilano</p>
                  </li>
                  <li>
                    <p>34. Maenam</p>
                  </li>
                  <li>
                    <p>35. Osaka Teppanyaki</p>
                  </li>
                  <li>
                    <p>36. The Sandbar Seafood Restaurant</p>
                  </li>
                  <li>
                    <p>37. Mon Pitou Bistro & Bakery</p>
                  </li>
                  <li>
                    <p>38.Minerva’s Restaurant</p>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography component="span">Retail</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    <p>39. Arbutus Shopping Centre</p>
                  </li>
                  <li>
                    <p>40. Safeway Arbutus</p>
                  </li>
                  <li>
                    <p>41. BCLIQUOR Arbutus</p>
                  </li>
                  <li>
                    <p>42. Choices Markets</p>
                  </li>
                  <li>
                    <p>43. Loblaws City Market Arbutus</p>
                  </li>
                  <li>
                    <p>44. Oakridge Park</p>
                  </li>
                  <li>
                    <p>45. Rackets & Runners</p>
                  </li>
                  <li>
                    <p>46. Konbiniya Japan Centre</p>
                  </li>
                  <li>
                    <p>47. Hill’s Of Kerrisdale</p>
                  </li>
                  <li>
                    <p>48. Hunters Garden Centre</p>
                  </li>
                  <li>
                    <p>49. Granville Island Public Market</p>
                  </li>
                  <li>
                    <p>50. The Wild Bunch Flower Shop</p>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </section>
  );
};

export default Location;
