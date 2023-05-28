import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

function FlagIcon({ classes, code, square }) {
  const flag = square ? classes[`${code}Squared`] : classes[code];
  return <Box className={clsx(classes.flagIcon, flag, square && classes.flagIconSquared)} component="span" />;
}

FlagIcon.propTypes = {
  classes: PropTypes.shape({
    flagIcon: PropTypes.string,
    flagIconSquared: PropTypes.string,
  }),
  code: PropTypes.string.isRequired,
  square: PropTypes.bool,
};

FlagIcon.defaultProps = {
  square: false,
  classes: {},
};

export default FlagIcon;
