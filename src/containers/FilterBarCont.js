import {connect} from 'react-redux'
import { setSearchFilter, resetFilters } from '../actions'
import FilterBar from '../components/drawer/FilterBar.js'

const mapStateToProps = (state, ownProps) => {
  return {
    searchValue: state.searchFilter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      console.log(e.currentTarget.value)
      dispatch(setSearchFilter(e.currentTarget.value))
    },
    clearSearch: () => dispatch(setSearchFilter('')),
    resetFilters: () => resetFilters(dispatch)
  }
}

const FilterBarCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBar)

export default FilterBarCont
