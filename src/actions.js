import {
  Schools,
} from './allSpells'

export const SELECT_SPELL = 'SELECT_SPELL'
export const PREVIOUS_SPELL = 'PREVIOUS_SPELL'
export const NEXT_SPELL = 'NEXT_SPELL'
export const TOGGLE_STAR = 'TOGGLE_STAR'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_SORT_FILTER = 'SET_SORT_FILTER'
export const SET_SCHOOL_FILTER = 'SET_SCHOOL_FILTER'
export const TOGGLE_SCHOOL_OPEN = 'TOGGLE_SCHOOL_OPEN'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_STARRED: 'SHOW_STARRED',
}

export const SortFilters = {
  SORT_ALPHA: 'SORT_ALPHA',
}

export const SchoolFilters = {
  ALL: 'All',
  ...Schools
}

const spunOpenSchoolsListObject = Object.keys(Schools).map((s) => {
  const ret = {}
  ret[Schools[s]] = true
  return ret
})
export const SchoolSpunOpen = Object.assign({}, ...spunOpenSchoolsListObject)

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const selectSpell = makeActionCreator(SELECT_SPELL, 'spell')
export const previousSpell = makeActionCreator(PREVIOUS_SPELL)
export const nextSpell = makeActionCreator(NEXT_SPELL)
export const toggleStar = makeActionCreator(TOGGLE_STAR, 'id')
export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter')
export const setSortFilter = makeActionCreator(SET_SORT_FILTER, 'filter')
export const setSchoolFilter = makeActionCreator(SET_SCHOOL_FILTER, 'school')
export const toggleSchoolOpen = makeActionCreator(TOGGLE_SCHOOL_OPEN, 'school')
