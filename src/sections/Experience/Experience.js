import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import humanizeDuration from "humanize-duration";
import ReactMarkdown from "react-markdown";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import Shimmer from "./Shimmer";

import { getExperience } from "../../redux/reducers/experience/actions";
import { experienceData, experienceLoader } from "../../redux/reducers/experience/selectors";
import { toDuration } from "../../utils";

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
          <Typography component="h2" variant="h2" color="textPrimary" gutterBottom>
            {t("experience")}
          </Typography>
          <Typography>
            {experience.length
              ? humanizeDuration(
                  experience
                    .map((val) => val.duration)
                    .reduce((prev, current) => {
                      return prev + current;
                    }),
                  { round: true, largest: 2 }
                )
              : null}
          </Typography>
          <Timeline position="right">
            {experience.map((data) => (
              <TimelineItem key={data?.company_name}>
                <TimelineOppositeContent>
                  <Avatar src={data?.company_logo ? data?.company_logo : "/images/unknown.svg"} />
                  {data?.start_date} - {data?.end_date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {data?.job_title}
                  </Typography>
                  <Typography>{data?.company_name}</Typography>
                  {/* <Typography>{toDuration(data?.start_date, data?.end_date)}</Typography> */}
                  <Typography>{humanizeDuration(data?.duration, { round: true, largest: 2 })}</Typography>
                  <ReactMarkdown>{data?.description}</ReactMarkdown>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </>
      )}
    </Container>
  );
}
