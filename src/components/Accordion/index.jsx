import * as React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./style.css";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordion-list">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography sx={{ width: "6%", flexShrink: 0 }}>01</Typography>
          <Typography>Redefining the meaning of home.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Crescent Legacy home is so much more than just incredible design.
            Our homes are thoughtfully developed to create places that help
            people connect, evolve and thrive. We achieve this mission through a
            standard of exceptional design, an intuitive understanding of modern
            homeowners and a building process that carefully oversees every step
            of construction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography sx={{ width: "6%", flexShrink: 0 }}>02</Typography>
          <Typography>Creating vibrant and livable communities.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Specializing in urban real estate projects, we know that everything
            we do has lasting impact. That’s why we take our role in shaping
            communities very seriously. We work closely with municipalities and
            community partners to create homes that enhance their surroundings.
            By integrating our homes into the community, we create a more
            vibrant and rewarding lifestyle for homeowners and neighbours alike.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography sx={{ width: "6%", flexShrink: 0 }}>03</Typography>
          <Typography>Hands-on approach from start to finish.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We employ a unique hands-on approach that encompasses every aspect
            of the process, from land acquisition to architecture and design, as
            well as construction and homeowner service. This commitment ensures
            our homeowners and investors are getting the best quality and
            service possible at all stages. Further, we keep a close eye on the
            latest innovations and market trends, allowing us to continually
            redefine smart living for homeowners.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography sx={{ width: "6%", flexShrink: 0 }}>04</Typography>
          <Typography>Leading the way with excellence.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Led by market veterans, the Crescent Legacy team offers a wealth of
            expertise that’s grounded in knowledge and integrity. Above all,
            we’re deeply passionate and driven by a desire to deliver
            outstanding projects. We’ve also achieved award-winning results as
            the proud recipient of Ovation Awards from Homebuilders Association
            Vancouver and Georgie Awards nominations from the Canadian Home
            Builders’ Association of BC.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
