import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import TranslateIcon from "@material-ui/icons/Translate";
import Typography from "@material-ui/core/Typography/Typography";
import values from "lodash/values";
import CheckIcon from "@material-ui/icons/Check";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../Button/Button";
import styles from "./styles";
import constants from "../../constants";
import FlagIcon from "../FlagIcon/FlagIcon";

const { languages } = constants;

function LanguageSwitcher({ classes, currentLanguage, handleListItemClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  return (
    <div>
      <Button
        aria-controls={menuId}
        aria-haspopup="true"
        aria-label="account of current user"
        color="inherit"
        onClick={handleProfileMenuOpen}
      >
        <TranslateIcon />
        English
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        onClose={handleMenuClose}
        open={isMenuOpen}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {values(languages).map((language) => (
          <MenuItem
            button
            key={language.code}
            onClick={() => {
              handleListItemClick(language.code);
              handleMenuClose();
            }}
          >
            <FlagIcon code={language.flag} />
            <Typography color="inherit" variant="body2">
              {language.title}
            </Typography>
            {currentLanguage === language.code && <CheckIcon className={classes.checkIcon} height="24px" width="24px" />}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

LanguageSwitcher.propTypes = {
  classes: PropTypes.shape({
    checkIcon: PropTypes.string,
  }).isRequired,
  currentLanguage: PropTypes.string,
  handleListItemClick: PropTypes.func.isRequired,
};

LanguageSwitcher.defaultProps = {
  currentLanguage: "en",
};

export default withStyles(styles)(LanguageSwitcher);
