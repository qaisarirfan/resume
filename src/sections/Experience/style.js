import get from "lodash/get";

const styles = (theme) => {
	return {
		card: {
			margin: 0,
			padding: 0,
		},
		skills: {
			padding: "50px 0",
		},
		sectionSubTitle: {
			fontSize: "20px",
			margin: "5px 0 20px",
		},
		sectionTitle: {
			marginBottom: "25px",
			overflow: "hidden",
			position: "relative",
			fontSize: "30px",
			display: "inline-block",
			"&:after": {
				background: get(theme, "palette.primary.main"),
				content: '""',
				position: "absolute",
				left: "0",
				bottom: "0",
				height: "2px",
				width: "100%",
			},
		},
		sectionSubCateTitle: {
			fontSize: "18px",
			margin: theme.spacing(3, 0),
			position: "relative",
			display: "flex",
			alignItems: "center",
			whiteSpace: "nowrap",
			"&:after": {
				content: '""',
				width: "100%",
				height: "1px",
				background: get(theme, "palette.secondary.main"),
				display: "flex",
				marginLeft: "18px",
			},
		},
		sectionSubCateTypeTitle: {
			fontSize: "15px",
			margin: theme.spacing(3, 0),
		},
		skillBar: {
			display: "flex",
			justifyContent: "space-between",
		},
	};
};

export default styles;
