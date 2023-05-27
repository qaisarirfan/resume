import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import humanizeDuration from "humanize-duration";
import ReactMarkdown from "react-markdown";

import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Shimmer from "./Shimmer";

import { getExperience } from "../../redux/reducers/experience/actions";
import { experienceData, experienceLoader } from "../../redux/reducers/experience/selectors";
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
          <Typography color="textPrimary" component="h2" gutterBottom variant="h2">
            {t("experience")}
          </Typography>
          <Typography>
            {experience.length
              ? humanizeDuration(
                  experience
                    .map((val) => durationInMilliseconds(val?.start_date, val?.end_date))
                    .reduce((prev, current) => prev + current),
                  { round: true, largest: 2 }
                )
              : null}
          </Typography>
          {experience.map((data) => (
            <div key={`experience-${data?.company_logo}`}>
              <Avatar src={data?.company_logo ? data?.company_logo : "/images/unknown.svg"} />
              <Typography component="span" variant="h6">
                {data?.job_title}
              </Typography>
              <Typography>{data?.company_name}</Typography>
              <Typography>{toDuration(data?.start_date, data?.end_date)}</Typography>
              <Typography>{[data?.start_date, "-", data?.end_date].join(" ")}</Typography>
              <ReactMarkdown>{data?.description}</ReactMarkdown>
            </div>
          ))}
        </>
      )}
    </Container>
  );
}
