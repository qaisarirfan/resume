import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid"
import { withTranslation } from "react-i18next"

import flow from "lodash/flow"
import orderBy from "lodash/orderBy"
import chunk from "lodash/chunk"
import filter from "lodash/filter"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import withStyles from "@material-ui/core/styles/withStyles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"

import connect from "./connect"
import style from "./style"
import removeSpecialCharactersWithUnderscore from "../../utils"

class Skills extends React.Component {
  componentDidMount() {
    const { loadSkills } = this.props

    loadSkills()
  }

  marks = () => {
    const data = []
    for (let index = 0; index <= 100; index += 20) {
      data.push({
        value: index,
        label: index
      })
    }
    return data
  }

  convertSkills = skills => {
    const { t, classes } = this.props
    let chunkData = orderBy(skills, ["order"], ["asc"])
    chunkData = chunk(chunkData, 3)
    return chunkData.map(data => {
      return (
        <Grid container spacing={3} key={uuid()}>
          {data.map(skill => {
            return (
              <Grid item xs={12} sm={4} key={uuid()}>
                <div className={classes.skillBar}>
                  <Typography component="p">
                    {t(removeSpecialCharactersWithUnderscore(skill.name))}
                  </Typography>
                  <Typography component="p">
                    {`${skill.value}${t("%")}`}
                  </Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
      )
    })
  }

  convertType = (category, data) => {
    const { skills, t, classes } = this.props
    const types = orderBy(data.types, ["order"], ["asc"])
    return types.map(value => {
      const skill = filter(skills.data, {
        category,
        subCategory: value.parent,
        type: value.id
      })
      return (
        <div key={uuid()}>
          <Grid container spacing={3} key={uuid()}>
            <Grid item xs={12} sm={3}>
              <Typography
                component="h6"
                variant="h6"
                color="textPrimary"
                gutterBottom
                className={classes.sectionSubCateTypeTitle}
              >
                {t(removeSpecialCharactersWithUnderscore(value.name))}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              {this.convertSkills(skill)}
            </Grid>
          </Grid>
        </div>
      )
    })
  }

  convertSubCategories = data => {
    const { skills, t, classes } = this.props
    const subCategories = orderBy(data.subCategories, ["order"], ["asc"])
    return subCategories.map(value => {
      const skill = filter(skills.data, {
        category: data.id,
        subCategory: value.id,
        type: null
      })
      return (
        <div key={uuid()}>
          <Typography
            component="h5"
            variant="h5"
            color="textPrimary"
            gutterBottom
            className={classes.sectionSubCateTitle}
          >
            {t(removeSpecialCharactersWithUnderscore(value.name))}
          </Typography>
          {this.convertSkills(skill)}
          {this.convertType(data.id, value)}
        </div>
      )
    })
  }

  convertCategories = () => {
    const { classes, skills, t } = this.props
    const data = orderBy(skills.categories, ["order"], ["asc"])
    return data.map(value => {
      const skill = filter(skills.data, {
        category: value.id,
        subCategory: null
      })
      return (
        <Card className={classes.card} key={uuid()}>
          <CardContent>
            <Typography
              component="h4"
              variant="h4"
              color="textPrimary"
              gutterBottom
              className={classes.sectionSubTitle}
            >
              {t(removeSpecialCharactersWithUnderscore(value.name))}
            </Typography>
            {this.convertSkills(skill)}
            {this.convertSubCategories(value)}
          </CardContent>
        </Card>
      )
    })
  }

  render() {
    const { classes, loading, loadingError, t } = this.props
    return (
      <Container component="main">
        <div className={classes.skills}>
          <Typography
            component="h2"
            variant="h2"
            color="textPrimary"
            gutterBottom
            className={classes.sectionTitle}
          >
            {t("skills")}
          </Typography>
          <div>{!loading && this.convertCategories()}</div>
          {loadingError}
        </div>
      </Container>
    )
  }
}

Skills.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  loadingError: PropTypes.string,
  loadSkills: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired
}

Skills.defaultProps = {
  loading: false,
  loadingError: ""
}

export default flow([connect, withStyles(style), withTranslation()])(Skills)
