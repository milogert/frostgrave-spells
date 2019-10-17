export const SELECT_SPELL = 'SELECT_SPELL'
export const PREVIOUS_SPELL = 'PREVIOUS_SPELL'
export const NEXT_SPELL = 'NEXT_SPELL'
export const STAR_SPELL = 'STAR_SPELL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_SORT_FILTER = 'SET_SORT_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_STARRED: 'SHOW_STARRED',
}

export const SortFilters = {
    SORT_ALPHA: 'SORT_ALPHA',
}

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const selectSpell = makeActionCreator(SELECT_SPELL, 'name')
export const previousSpell = makeActionCreator(PREVIOUS_SPELL)
export const nextSpell = makeActionCreator(NEXT_SPELL)
export const starSpell = makeActionCreator(STAR_SPELL, 'name')
export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter')
export const setSortFilter = makeActionCreator(SET_SORT_FILTER, 'filter')
