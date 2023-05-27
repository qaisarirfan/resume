import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import styles from "./styles";

function Loading({ classes, loading, transparent }) {
  return (
    <Box className={clsx(classes.root, loading ? "loading" : "", transparent ? "transparent" : "")} component="div">
      {loading ? <CircularProgress className={classes.loader} /> : null}
    </Box>
  );
}

Loading.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    loader: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
};

Loading.defaultProps = {
  loading: true,
  transparent: false,
};

export default withStyles(styles, { withTheme: true })(Loading);
