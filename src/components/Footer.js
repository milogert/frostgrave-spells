import React from 'react'
import VisibilityFilterLink from '../containers/filterLinks/Visibility'
import RangeFilterLink from '../containers/filterLinks/Range'
import {
  VisibilityFilters,
  RangeFilters,
} from '../actions'
import {
  Button,
  FormControl,
  InputLabel,
  ButtonGroup,
} from '@material-ui/core'
import SchoolSelectFilter from '../containers/SchoolSelectFilter'

export const filterElementList = [
  <ButtonGroup size="small" aria-label="small outlined button group">
    <VisibilityFilterLink filter={VisibilityFilters.SHOW_ALL}>All</VisibilityFilterLink>
    <VisibilityFilterLink filter={VisibilityFilters.SHOW_STARRED}>Starred</VisibilityFilterLink>
  </ButtonGroup>,
  <ButtonGroup size="small">
    {Object.keys(RangeFilters).map((range, index) =>
      <RangeFilterLink key={range} filter={RangeFilters[range]}>{RangeFilters[range]}</RangeFilterLink>
    )}}
  </ButtonGroup>,
  <ButtonGroup size="small" aria-label="small outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>,
  <FormControl>
    <InputLabel htmlFor="school-native-helper">School</InputLabel>
    <SchoolSelectFilter />
  </FormControl>
]
