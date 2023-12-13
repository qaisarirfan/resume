import PropTypes from "prop-types";
import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export default function Skills({ heading, skills }) {
	const data = skills.sort((aValue, bValue) => aValue.order - bValue.order);
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom>{heading}</Typography>
				{data.map((skill) => (
					<Box key={`skill-${skill.level}`}>
						<Box sx={{ alignItems: "center", display: "flex" }}>
							<Box sx={{ mr: 1, width: "100%" }}>
								<Typography>{skill.title}</Typography>
							</Box>
							<Box sx={{ minWidth: 35 }}>
								<Typography
									color="text.secondary"
									variant="body2"
								>{`${Math.round(skill.level)}%`}</Typography>
							</Box>
						</Box>
						<LinearProgress value={skill.level} variant="determinate" />
					</Box>
				))}
			</CardContent>
		</Card>
	);
}

Skills.propTypes = {
	heading: PropTypes.string,
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			level: PropTypes.number,
			order: PropTypes.number,
			title: PropTypes.string,
		}),
	),
};

Skills.defaultProps = {
	heading: null,
	skills: [],
};
