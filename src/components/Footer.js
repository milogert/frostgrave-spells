import React from 'react'
import RangeFilterLink from '../containers/filterLinks/Range'
import {
  RangeFilters,
} from '../actions'
import {
  Button,
  Slider,
  FormControl,
  ButtonGroup,
} from '@material-ui/core'
import SchoolSelectFilter from '../containers/SchoolSelectFilter'
import StarFilterSwitch from '../containers/filterLinks/StarFilterSwitch'

export const filterElementList = [
	<StarFilterSwitch label='filterStarred' />,
  <ButtonGroup size="small">
    <RangeFilterLink>test</RangeFilterLink>
    <RangeFilterLink>test</RangeFilterLink>
    <RangeFilterLink>test</RangeFilterLink>
  </ButtonGroup>,
  <ButtonGroup size="small">
    {Object.keys(RangeFilters).map((range, index) =>
      <RangeFilterLink key={range} filter={RangeFilters[range]}>{RangeFilters[range]}</RangeFilterLink>
    )}}
  </ButtonGroup>,
  <Slider
    value={[10, 20]}
    aria-labelledby="base-casting-number-filter"
    valueLabelDisplay="auto"
    step={1}
    min={10}
    max={20}
  />,
  <ButtonGroup size="small" aria-label="small outlined button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>,
  <FormControl>
    <SchoolSelectFilter name="filterSchool" />
  </FormControl>
]
