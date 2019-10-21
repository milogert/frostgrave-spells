import { connect } from 'react-redux'
import {
  setSchoolFilter,
  SchoolFilters,
} from '../actions'
import SelectFilter from '../components/SelectFilter'

const mapStateToProps = (state, ownProps) => {
  return {
    //value: state.schoolFilter,
    optionMap: SchoolFilters,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      console.log(e.currentTarget.value)
      console.log(setSchoolFilter(e.currentTarget.value))
      dispatch(setSchoolFilter(SchoolFilters[e.currentTarget.value]))
    },
  }
}

const SchoolSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

export default SchoolSelectFilter
