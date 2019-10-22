import { connect } from 'react-redux'
import { toggleDrawer, selectSpell, toggleSchoolOpen } from '../actions'
import SpellList from '../components/SpellList'
import {VisibilityFilters, SchoolFilters, RangeFilters} from '../actions'

const getVisibleSpells = (spells, starredFilter, schoolFilter, rangeFilter, searchFilter) => {
  let visibleSpells;
  switch (starredFilter) {
    case VisibilityFilters.SHOW_ALL:
      visibleSpells = spells
      break;
    case VisibilityFilters.SHOW_STARRED:
      visibleSpells = spells.filter(s => s.starred)
      break;
    default:
      visibleSpells = spells
  }

  switch (schoolFilter) {
    case SchoolFilters.ALL:
      visibleSpells = visibleSpells.filter(s => true)
      break;
    default:
      visibleSpells = visibleSpells.filter(s => s.school === schoolFilter)
  }

  switch (rangeFilter) {
    case RangeFilters.ALL:
      visibleSpells = visibleSpells.filter(s => true)
      break;
    default:
      visibleSpells = visibleSpells.filter(
        s => s.range === rangeFilter
      )
  }

  const filteredNames = visibleSpells.filter(
    s => s.name.toLowerCase().includes(searchFilter.toLowerCase())
  )
  const filteredDesc = visibleSpells.filter(
    s => !filteredNames.includes(s) && s.description.toLowerCase().includes(searchFilter.toLowerCase())
  )

  visibleSpells = filteredNames.concat(filteredDesc)

  return visibleSpells
}

const mapStateToProps = state => {
  return {
    schoolOpen: state.schoolOpen,
    spells: getVisibleSpells(state.spells, state.visibilityFilter, state.schoolFilter, state.rangeFilter, state.searchFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSchoolClick: school => {
      dispatch(toggleSchoolOpen(school))
    },
    onSpellClick: spell => {
      dispatch(selectSpell(spell))
      dispatch(toggleDrawer())
    },
  }
}

const VisibleSpells = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList)

export default VisibleSpells
