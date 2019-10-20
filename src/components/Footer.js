import React from 'react'
import FilterLink from '../containers/FilterLink'
import SchoolFilterLink from '../containers/SchoolFilterLink'
import { VisibilityFilters, SchoolFilters } from '../actions'
import {ButtonGroup} from '@blueprintjs/core'

const Footer = () => (
  <div>
      Star Filter:
      <ButtonGroup>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_STARRED}>Starred</FilterLink>
      </ButtonGroup>
      School Filter:
      <ButtonGroup>
        <SchoolFilterLink filter={SchoolFilters.SCHOOL_ALL}>All</SchoolFilterLink>
        <SchoolFilterLink filter={SchoolFilters.SCHOOL_ENCHANT}>Enchant</SchoolFilterLink>
        <SchoolFilterLink filter={SchoolFilters.SCHOOL_EVOKE}>Evoke</SchoolFilterLink>
      </ButtonGroup>
  </div>
)

export default Footer
