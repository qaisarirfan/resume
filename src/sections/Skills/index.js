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
        <Grid container spacing={3} key={`skill-${skill.name}`}>
          <Grid item xs={12} sm={4}>
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
        <Grid container spacing={3} key={`type-${value.name}`}>
          <Grid item xs={12} sm={3}>
            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
              {t(removeSpecialCharactersWithUnderscore(value.name))}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
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
          <Typography component="h5" variant="h5" color="textPrimary" gutterBottom>
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
            <Typography component="h4" variant="h4" color="textPrimary" gutterBottom>
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
        <Typography component="h2" variant="h2" color="textPrimary" gutterBottom>
          {t("skills")}
        </Typography>
        <div>{!isLoading && convertCategories()}</div>
        {loadingError}
      </div>
    </Container>
  );
}
