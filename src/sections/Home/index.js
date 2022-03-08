import React, { useEffect } from "react";
import { DateTime } from "luxon";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Container from "@mui/material/Container";

import { createLoadExpertiseAction } from "../../redux/reducers/expertise";
import { Main, StyledTypography } from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(createLoadExpertiseAction);
  }, []);

  return (
    <Main>
      <Container>
        <StyledTypography>{t("about", { experience: DateTime.local(2011, 1, 1).toRelative() })}</StyledTypography>
      </Container>
    </Main>
  );
};

export default Home;
