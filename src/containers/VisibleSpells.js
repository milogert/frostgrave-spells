import { connect } from 'react-redux'
import { toggleDrawer, selectSpell, toggleSchoolOpen } from '../actions'
import SpellList from '../components/SpellList'
import {VisibilityFilters, SchoolFilters} from '../actions'

const getVisibleSpells = (spells, starredFilter, schoolFilter) => {
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

  return visibleSpells
}

const mapStateToProps = state => {
  return {
    schoolOpen: state.schoolOpen,
    spells: getVisibleSpells(state.spells, state.visibilityFilter, state.schoolFilter)
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
