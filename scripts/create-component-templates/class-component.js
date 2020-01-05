import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import flow from "lodash/flow"
import styles from "./styles"

// COMPONENT Component content
class COMPONENT extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  render() {
    const { show } = this.state
    const { classes } = this.props

    return <div>COMPONENT</div>
  }
}

// COMPONENT Proptypes
COMPONENT.propTypes = {
  classes: PropTypes.object.isRequired
}

// COMPONENT Default props
COMPONENT.defaultProps = {}

export default flow([withStyles(styles)])(COMPONENT)
