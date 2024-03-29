import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import {
	selectAppLanguage,
	setAppLanguageAction,
} from "../../redux/reducers/languages";

import constants from "../../utils/constants";

const { languages } = constants;

export default function LanguageSwitcher() {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const appLanguage = useSelector(selectAppLanguage);

	const onChangeHandler = ({ target: { value } }) => {
		dispatch(setAppLanguageAction(value));
	};

	return (
		<Box sx={{ pl: 2, pr: 2 }}>
			<Typography gutterBottom>{t("language")}</Typography>
			<ToggleButtonGroup
				aria-label="languages"
				color="primary"
				exclusive
				fullWidth
				onChange={onChangeHandler}
				value={appLanguage}
			>
				{Object.values(languages).map((language) => (
					<ToggleButton key={language.code} value={language.code}>
						{language.title}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</Box>
	);
}
