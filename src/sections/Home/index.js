import React, { useEffect } from "react";
import { Interval } from "luxon";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import humanizeDuration from "humanize-duration";

import Container from "@mui/material/Container";

import { createLoadExpertiseAction } from "../../redux/reducers/expertise";
import { Main, StyledTypography } from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(createLoadExpertiseAction());
  }, []);

  const totalDuration = Interval.fromDateTimes(new Date("01 Jan 2011"), new Date()).toDuration().valueOf();
  const formatted = humanizeDuration(totalDuration, { round: true, largest: 2, conjunction: " and " });

  return (
    <Main>
      <Container>
        <StyledTypography>{t("about", { experience: formatted })}</StyledTypography>
      </Container>
    </Main>
  );
};

export default Home;
