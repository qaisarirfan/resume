// Loading: Styling here
const styles = (theme) => ({
  root: {
    display: "none",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    padding: `0 ${theme.spacing(1)}px`,

    "&.loading": {
      display: "flex"
    },
    "&.transparent": {
      backgroundColor: "transparent"
    }
  },
  appicalLogo: {
    textAlign: "center",
    marginBottom: "32px"
  },
  loader: {
    width: "100%",
    maxWidth: "350px"
  }
})

export default styles
