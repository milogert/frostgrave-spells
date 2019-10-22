import { connect } from 'react-redux'
import {
  setSchoolFilter,
  SchoolFilters,
} from '../actions'
import SelectFilter from '../components/SelectFilter'

const mapStateToProps = (state, ownProps) => {
  return {
    optionMap: SchoolFilters,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setSchoolFilter(SchoolFilters[e.currentTarget.value]))
    },
  }
}

const SchoolSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

export default SchoolSelectFilter
