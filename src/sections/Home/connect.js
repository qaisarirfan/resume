import { connect } from "react-redux"
import { createLoadExpertiseAction } from "../../redux/reducers/expertise"

const mapDispatchToProps = {
  loadExpertise: createLoadExpertiseAction
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)
