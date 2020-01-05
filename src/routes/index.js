import React from "react"
import flow from "lodash/flow"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import withStyles from "@material-ui/core/styles/withStyles"

import connect from "./connect"
import style from "./style"
import Home from "../sections/Home"
import Skills from "../sections/Skills"

const Routers = ({ classes, t }) => (
  <>
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          <img src="/images/profile-img.png" alt={t("name")} />
        </div>
        <div>
          <Typography variant="h5" noWrap>
            {t("name")}
          </Typography>
          <Typography variant="caption" noWrap>
            {t("title")}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
    <Home />
    <Skills />
  </>
)

Routers.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func
}

Routers.defaultProps = {
  t: a => a
}

export default flow([connect, withStyles(style), withTranslation()])(Routers)
