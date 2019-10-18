import { combineReducers } from 'redux'
import allSpells from './allSpells'
import {
  SET_VISIBILITY_FILTER,
  SELECT_SPELL,
  TOGGLE_STAR,
  SortFilters,
  VisibilityFilters,
} from './actions'

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

const spell = (state = {}, action) => {
  switch (action.type) {
    case SELECT_SPELL:
      return allSpells[action.id]
    default:
      return state
  }
}

const spells = (state = allSpells, action) => {
  switch (action.type) {
    case TOGGLE_STAR:
      return state.map((spell, index) => {
        if (index === action.id) {
          return Object.assign({}, spell, {starred: !spell.starred})
        }
        return spell
      })
    default:
      return state
  }
}

const spellBook = combineReducers({
  visibilityFilter,
  sortFilter,
  spell,
  spells,
})
    
export default spellBook
