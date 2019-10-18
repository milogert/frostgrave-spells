import { connect } from 'react-redux'
import { selectSpell } from '../actions'
import SpellList from '../components/SpellList'
import {VisibilityFilters} from '../actions'

const getVisibleSpells = (spells, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return spells
    case VisibilityFilters.SHOW_STARRED:
      return spells.filter(s => s.starred)
    default:
      return spells
  }
}

const mapStateToProps = state => {
  return {
    spells: getVisibleSpells(state.spells, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSpellClick: id => {
      dispatch(selectSpell(id))
    }
  }
}

const VisibleSpells = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList)

export default VisibleSpells
