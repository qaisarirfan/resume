import React from "react";
import { useTranslation } from "react-i18next";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Heading = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[600],
	fontSize: theme.typography.pxToRem(11),
	fontWeight: 700,
	letterSpacing: ".08rem",
	margin: "20px 0 10px",
	textTransform: "uppercase",
}));

const IconToggleButton = styled(ToggleButton)({
	"& > *": {
		marginRight: "8px",
	},
	display: "flex",
	justifyContent: "center",
	width: "100%",
});

export default function Appearance() {
	const { t } = useTranslation();
	const [mode, setMode] = React.useState(null);

	const handleChangeThemeMode = (event, paletteMode) => {
		if (paletteMode === null) {
			return;
		}

		setMode(paletteMode);
	};

	return (
		<Box sx={{ pl: 2, pr: 2 }}>
			<Heading gutterBottom id="settings-appearance">
				{t("appearance")}
			</Heading>
			<ToggleButtonGroup
				aria-labelledby="settings-appearance"
				color="primary"
				exclusive
				fullWidth
				onChange={handleChangeThemeMode}
				value={mode}
			>
				<IconToggleButton
					aria-label={t("light")}
					data-ga-event-action="light"
					data-ga-event-category="settings"
					value="light"
				>
					<LightModeIcon fontSize="small" />
					{t("light")}
				</IconToggleButton>
				<IconToggleButton
					aria-label={t("system")}
					data-ga-event-action="system"
					data-ga-event-category="settings"
					value="system"
				>
					<SettingsBrightnessIcon fontSize="small" />
					{t("system")}
				</IconToggleButton>
				<IconToggleButton
					aria-label={t("dark")}
					data-ga-event-action="dark"
					data-ga-event-category="settings"
					value="dark"
				>
					<DarkModeOutlinedIcon fontSize="small" />
					{t("dark")}
				</IconToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
