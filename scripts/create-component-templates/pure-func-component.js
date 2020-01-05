import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import styles from "./styles"

// COMPONENT Component content
const COMPONENT = ({ classes }) => <div>COMPONENT</div>

// COMPONENT Proptypes
COMPONENT.propTypes = {
  classes: PropTypes.object.isRequired
}

// COMPONENT Default props
COMPONENT.defaultProps = {}

export default withStyles(styles)(COMPONENT)
