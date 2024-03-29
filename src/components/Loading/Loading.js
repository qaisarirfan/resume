import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading({ classes, loading, transparent }) {
	return (
		<Box
			className={clsx(
				classes.root,
				loading ? "loading" : "",
				transparent ? "transparent" : "",
			)}
			component="div"
		>
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

export default Loading;
