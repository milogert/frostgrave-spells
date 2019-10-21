import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters} from '../actions'
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  ButtonGroup,
} from '@material-ui/core'
import SchoolSelectFilter from '../containers/SchoolSelectFilter'

export const filterElementList = [
  <FormControl>
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_STARRED}>Starred</FilterLink>
    </ButtonGroup>
  </FormControl>,
  <FormControl>
    <InputLabel htmlFor="school-native-helper">School</InputLabel>
    <SchoolSelectFilter />
  </FormControl>
]

const Footer = () => {
  return (
    <Container maxWidth={false}>
    <Grid container spacing={3} direction="column" justify="center" alignItems="flex-start">
      <Grid item>
        <FormControl>
          <ButtonGroup>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_STARRED}>Starred</FilterLink>
          </ButtonGroup>
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl>
          <InputLabel htmlFor="school-native-helper">School</InputLabel>
          <SchoolSelectFilter />
        </FormControl>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Footer
