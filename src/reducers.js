import { combineReducers } from 'redux'
import {allSpells} from './allSpells'
import {
  TOGGLE_DRAWER,
  SET_VISIBILITY_FILTER,
  SET_SCHOOL_FILTER,
  SET_RANGE_FILTER,
  SET_SEARCH_FILTER,
  SELECT_SPELL,
  TOGGLE_STAR,
  TOGGLE_SCHOOL_OPEN,
  SortFilters,
  VisibilityFilters,
  SchoolFilters,
  RangeFilters,
  SchoolSpunOpen,
} from './actions'

const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state
    default:
      return state
  }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const sortFilter = (state = SortFilters.SORT_ALPHA, action) => {
    return state
}

const schoolFilter = (state = SchoolFilters.ALL, action) => {
  switch (action.type) {
    case SET_SCHOOL_FILTER:
      return action.school
    default:
      return state
  }
}

const rangeFilter = (state = RangeFilters.ALL, action) => {
  switch (action.type) {
    case SET_RANGE_FILTER:
      return action.range
    default:
      return state
  }
}

const searchFilter = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.term
    default:
      return state
  }
}

const schoolOpen = (state = SchoolSpunOpen, action) => {
  switch (action.type) {
    case TOGGLE_SCHOOL_OPEN:
      const toggled = {}
      toggled[action.school] = !state[action.school]
      return {...state, ...toggled}
    default:
      return state
  }
}

const spell = (state = {}, action) => {
  switch (action.type) {
    case SELECT_SPELL:
      return action.spell
    default:
      return state
  }
}

const spells = (state = allSpells, action) => {
  switch (action.type) {
    case TOGGLE_STAR:
      return state.map((spell, index) => {
        if (spell.school === action.school && spell.name === action.name) {
          return Object.assign({}, spell, {starred: !spell.starred})
        }
        return spell
      })
    default:
      return state
  }
}

const spellBook = combineReducers({
  drawerOpen,
  visibilityFilter,
  sortFilter,
  schoolFilter,
  rangeFilter,
  searchFilter,
  spell,
  spells,
  schoolOpen,
})
    
export default spellBook
