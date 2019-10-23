import { connect } from 'react-redux'
import { filterStarred} from '../../actions'
import FilterSwitch from '../../components/drawer/FilterSwitch'

const mapStateToProps = (state, ownProps) => {
  return {
    checked: state.filterStarred,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwitch: (e) => {
      dispatch(filterStarred(e.target.checked))
    }
  }
}

const StarFilterSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSwitch)

export default StarFilterSwitch
