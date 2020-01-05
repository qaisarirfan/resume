import React from "react"
import flow from "lodash/flow"
import PropTypes from "prop-types"
import moment from "moment"
import { withTranslation } from "react-i18next"
import HTMLReactParser from "html-react-parser"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import withStyles from "@material-ui/core/styles/withStyles"

import connect from "./connect"
import style from "./style"

class Home extends React.Component {
  componentDidMount() {
    const { loadExpertise } = this.props

    loadExpertise()
  }

  render() {
    const { classes, t } = this.props

    return (
      <Container component="main" className={classes.heroContent}>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          {HTMLReactParser(
            t("about", {
              experience: moment([2011, 0, 1]).toNow(true)
            })
          )}
        </Typography>
      </Container>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

Home.defaultProps = {}

export default flow([connect, withStyles(style), withTranslation()])(Home)
