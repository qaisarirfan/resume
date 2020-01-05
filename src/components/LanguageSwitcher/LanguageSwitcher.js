import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import TranslateIcon from "@material-ui/icons/Translate"
import Typography from "@material-ui/core/Typography/Typography"
import values from "lodash/values"
import CheckIcon from "@material-ui/icons/Check"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "../Button/Button"
import styles from "./styles"
import constants from "../../constants"
import FlagIcon from "../FlagIcon/FlagIcon"

const { languages } = constants

// LanguageSwitcher Component content
const LanguageSwitcher = ({
  classes, currentLanguage, handleListItemClick
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = "primary-search-account-menu"

  return (
    <div>
      <Button
        onClick={handleProfileMenuOpen}
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        color="inherit"
      >
        <TranslateIcon />
        English
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {values(languages).map((language) => (
          <MenuItem
            button
            key={language.code}
            onClick={() => {
              handleListItemClick(language.code)
              handleMenuClose()
            }}
          >
            <FlagIcon code={language.flag} />
            <Typography color="inherit" variant="body2">
              {language.title}
            </Typography>
            {currentLanguage === language.code && (
              <CheckIcon
                width="24px"
                height="24px"
                className={classes.checkIcon}
              />
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

// LanguageSwitcher Proptypes
LanguageSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
  currentLanguage: PropTypes.string,
  handleListItemClick: PropTypes.func.isRequired
}

// LanguageSwitcher Default props
LanguageSwitcher.defaultProps = {
  currentLanguage: "en"
}

export default withStyles(styles)(LanguageSwitcher)
