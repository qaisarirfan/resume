import humanizeDuration from "humanize-duration";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ReadMore from "../../components/ReadMore";
import Md from "./Md";
import Shimmer from "./Shimmer";

import { getExperience } from "../../redux/reducers/experience/actions";
import {
	experienceData,
	experienceLoader,
} from "../../redux/reducers/experience/selectors";

import { durationInMilliseconds, toDuration } from "../../utils";

export default function Expertise() {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const isLoading = useSelector(experienceLoader);
	const experience = useSelector(experienceData);

	useEffect(() => {
		dispatch(getExperience());
	}, []);

	return (
		<Container component="main">
			{isLoading ? (
				<Shimmer />
			) : (
				<>
					<Typography
						color="textPrimary"
						component="h2"
						gutterBottom
						variant="h2"
					>
						{t("experience")}
					</Typography>
					<Typography>
						{experience.length
							? humanizeDuration(
									experience
										.map((val) =>
											durationInMilliseconds(val?.start_date, val?.end_date),
										)
										.reduce((prev, current) => prev + current),
									{ round: true, largest: 2 },
							  )
							: null}
					</Typography>
					{experience.map((data) => (
						<div key={`experience-${data?.id}`}>
							<Avatar
								src={
									data?.company_logo
										? data?.company_logo
										: "./images/unknown.svg"
								}
							/>
							<Typography component="span" variant="h6">
								{data?.job_title}
							</Typography>
							<Typography>{data?.company_name}</Typography>
							<Typography>
								{toDuration(data?.start_date, data?.end_date)}
							</Typography>
							<Typography>
								{[data?.start_date, "-", data?.end_date].join(" ")}
							</Typography>
							<ReadMore>
								<Md id={data?.id} />
							</ReadMore>
							<Stack direction="row" spacing={1}>
								{data?.skills?.sort()?.map((skill) => (
									<Chip
										color="primary"
										key={skill}
										label={skill}
										size="small"
									/>
								))}
							</Stack>
						</div>
					))}
				</>
			)}
		</Container>
	);
}
