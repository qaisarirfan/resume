import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import styles from "./styles";

// FlagIcon Component content
const FlagIcon = ({ classes, code, square }) => {
  const flag = square ? classes[`${code}Squared`] : classes[code];
  return <Box className={clsx(classes.flagIcon, flag, square && classes.flagIconSquared)} component="span" />;
};

// FlagIcon Proptypes
FlagIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  square: PropTypes.bool,
};

// FlagIcon Default props
FlagIcon.defaultProps = {
  square: false,
};

export default withStyles(styles)(FlagIcon);
