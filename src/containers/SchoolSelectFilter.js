import { connect } from 'react-redux'
import {
  setSchoolFilter,
  SchoolFilters,
} from '../actions'
import SelectFilter from '../components/SelectFilter'

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.schoolFilter,
    optionMap: SchoolFilters,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setSchoolFilter(e.target.value))
    },
  }
}

const SchoolSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

export default SchoolSelectFilter
