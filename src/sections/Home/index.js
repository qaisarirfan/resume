import humanizeDuration from "humanize-duration";
import { Interval } from "luxon";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";

import Container from "@mui/material/Container";

import { createLoadExpertiseAction } from "../../redux/reducers/expertise";

import clients from "../../config/clients";

import { Main } from "./style";

function Home() {
	const dispatch = useDispatch();

	const [description, setDescription] = useState(null);

	const getAboutMe = async () => {
		const response = await clients.default.client.get(
			"/markdown/en/about-me.md",
		);
		setDescription(response.data);
	};

	useEffect(() => {
		dispatch(createLoadExpertiseAction());
		getAboutMe();
	}, []);

	const totalDuration = Interval.fromDateTimes(
		new Date("01 Jan 2011"),
		new Date(),
	)
		.toDuration()
		.valueOf();
	const formatted = humanizeDuration(totalDuration, {
		round: true,
		largest: 2,
		conjunction: " and ",
	});

	return (
		<Main>
			<Container>
				<ReactMarkdown>
					{description?.replace("__experience__", formatted)}
				</ReactMarkdown>
			</Container>
		</Main>
	);
}

export default Home;
