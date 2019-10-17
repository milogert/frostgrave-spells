import { combineReducers } from 'redux'
import spells from './spells'
import {
    SELECT_SPELL,
    SortFilters,
    VisibilityFilters,
} from './actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    return state
}

const sortFilter = (state = SortFilters.SORT_ALPHA, action) => {
    return state
}

const spell = (state = {}, action) => {
    switch (action.type) {
        case SELECT_SPELL:
            return spells[action.name]
        default:
            return state
    }
}

const spellBook = combineReducers({
    visibilityFilter,
    sortFilter,
    spell,
})
    
export default spellBook
