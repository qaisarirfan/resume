import { connect } from "react-redux"
import {
  createLoadSkillsAction,
  selectSkills,
  selectIsLoading,
  selectLoadingError
} from "../../redux/reducers/skills"

const mapDispatchToProps = {
  loadSkills: createLoadSkillsAction
}

const mapStateToProps = state => ({
  skills: selectSkills(state),
  loading: selectIsLoading(state),
  loadingError: selectLoadingError(state)
})

export default connect(mapStateToProps, mapDispatchToProps)
