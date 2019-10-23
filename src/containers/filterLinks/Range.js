import React from 'react'
import {Trans} from 'react-i18next'
import { connect } from 'react-redux'
import { setRangeFilter } from '../../actions'
import Link from '../../components/Link'
import Button from '@material-ui/core/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.rangeFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setRangeFilter(ownProps.filter))
    }
  }
}

const RangeFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)

export default RangeFilterLink
