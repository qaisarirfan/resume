const styles = theme => ({
  heroContent: {
    padding: theme.spacing(8),
    backgroundImage: "url(/images/javascript-background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: "100vh",
    minHeight: "500px",
    position: "relative",
    display: "flex",
    color: theme.palette.getContrastText(theme.palette.text.primary),
    "& p": {
      maxWidth: "700px",
      margin: "auto",
      color: "inherit",
      zIndex: "1",
      "& span": {
        display: "inline-block",
        paddingBottom: theme.spacing(2)
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "left",
      }
    },
    "&:before": {
      content: '""',
      background: "rgba(0, 0, 0, 0.8)",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: "0"
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: theme.spacing(9, 1),
    }
  }
})

export default styles
