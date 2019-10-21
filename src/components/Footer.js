import React from 'react'
import FilterLink from '../containers/FilterLink'
import SchoolFilterLink from '../containers/SchoolFilterLink'
import { VisibilityFilters, SchoolFilters } from '../actions'
import {
  ButtonGroup,
  Select,
  NativeSelect,
} from '@material-ui/core'
import SchoolSelectFilter from '../containers/SchoolSelectFilter'

const Footer = () => {
  return (
    <div>
        Star Filter:
        <ButtonGroup>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_STARRED}>Starred</FilterLink>
        </ButtonGroup>
        School Filter:
        <SchoolSelectFilter />
    </div>
  )
}

export default Footer
