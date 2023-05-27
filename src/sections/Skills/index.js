import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { removeSpecialCharactersWithUnderscore } from "../../utils";
import { createLoadSkillsAction, selectIsLoading, selectLoadingError, selectSkills } from "../../redux/reducers/skills";

export default function Skills() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isLoading = useSelector(selectIsLoading);
  const skills = useSelector(selectSkills);
  const loadingError = useSelector(selectLoadingError);

  const marks = () => {
    const data = [];
    for (let index = 0; index <= 100; index += 20) {
      data.push({
        value: index,
        label: index,
      });
    }
    return data;
  };

  useEffect(() => {
    dispatch(createLoadSkillsAction());
  }, []);

  const convertSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <Grid container key={`skill-${skill.name}`} spacing={3}>
          <Grid item sm={4} xs={12}>
            <Typography component="p">{t(removeSpecialCharactersWithUnderscore(skill.name))}</Typography>
            <Typography component="p">{`${skill.value}${t("%")}`}</Typography>
          </Grid>
        </Grid>
      );
    });
  };

  const convertType = (category, data) => {
    const types = data?.types?.sort((val) => val.order);
    return types?.map((value) => {
      const skill = skills?.data?.filter((val) => {
        return val.category === category && val.subCategory === value.parent && val.type === value.id;
      });
      return (
        <Grid container key={`type-${value.name}`} spacing={3}>
          <Grid item sm={3} xs={12}>
            <Typography color="textPrimary" component="h6" gutterBottom variant="h6">
              {t(removeSpecialCharactersWithUnderscore(value.name))}
            </Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            {convertSkills(skill)}
          </Grid>
        </Grid>
      );
    });
  };

  const convertSubCategories = ({ subCategories, id }) => {
    const sortedSubCategories = subCategories?.sort((val) => val.order);
    return sortedSubCategories?.map((value) => {
      const skill = skills?.data?.filter((val) => {
        return val.category === id && val.subCategory === value.id && val.type === null;
      });
      return (
        <div key={`subcat-${value.name}`}>
          <Typography color="textPrimary" component="h5" gutterBottom variant="h5">
            {t(removeSpecialCharactersWithUnderscore(value.name))}
          </Typography>
          {convertSkills(skill)}
          {convertType(id, value)}
        </div>
      );
    });
  };

  const convertCategories = () => {
    const { categories, data } = skills;
    return categories?.map((category) => {
      const skill = data.filter((val) => {
        return val.category === category.id && val.subCategory === null;
      });
      return (
        <Card key={`card-${category.name}`}>
          <CardContent>
            <Typography color="textPrimary" component="h4" gutterBottom variant="h4">
              {t(removeSpecialCharactersWithUnderscore(category.name))}
            </Typography>
            {convertSkills(skill)}
            {convertSubCategories(category)}
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <Container component="main">
      <div>
        <Typography color="textPrimary" component="h2" gutterBottom variant="h2">
          {t("skills")}
        </Typography>
        <div>{!isLoading && convertCategories()}</div>
        {loadingError}
      </div>
    </Container>
  );
}
