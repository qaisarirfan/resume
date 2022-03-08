import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Skills({ heading, skills }) {
  const data = skills.sort((a, b) => a.order - b.order);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{heading}</Typography>
        {data.map((skill) => (
          <Box key={`skill-${skill.level}`}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <Typography>{skill.title}</Typography>
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(skill.level)}%`}</Typography>
              </Box>
            </Box>
            <LinearProgress variant="determinate" value={skill.level} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

Skills.propTypes = {
  heading: PropTypes.string,
  skills: PropTypes.shape(
    PropTypes.arrayOf({
      title: PropTypes.string,
      level: PropTypes.number,
      order: PropTypes.number,
    })
  ),
};

Skills.defaultProps = {
  heading: null,
  skills: [],
};

export default Skills;
