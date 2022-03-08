import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import styles from "./styles";

// Loading Component content
const Loading = ({ classes, loading, transparent }) => (
  <Box component="div" className={clsx(classes.root, loading ? "loading" : "", transparent ? "transparent" : "")}>
    {loading && <CircularProgress className={classes.loader} />}
  </Box>
);

// Loading Proptypes
Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
};

// Loading Default props
Loading.defaultProps = {
  loading: true,
  transparent: false,
};

export default withStyles(styles, { withTheme: true })(Loading);
