import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import styles from "./styles";

function FlagIcon({ classes, code, square }) {
  const flag = square ? classes[`${code}Squared`] : classes[code];
  return <Box className={clsx(classes.flagIcon, flag, square && classes.flagIconSquared)} component="span" />;
}

FlagIcon.propTypes = {
  classes: PropTypes.shape({
    flagIcon: PropTypes.string,
    flagIconSquared: PropTypes.string,
  }).isRequired,
  code: PropTypes.string.isRequired,
  square: PropTypes.bool,
};

FlagIcon.defaultProps = {
  square: false,
};

export default withStyles(styles)(FlagIcon);
