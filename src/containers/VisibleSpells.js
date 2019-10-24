import { connect } from "react-redux";
import { closeDrawer, selectSpell, toggleSchoolOpen } from "../actions";
import SpellList from "../components/SpellList";
import { SchoolFilters, RangeFilters } from "../actions";

const getVisibleSpells = (
  spells,
  starredFilter,
  schoolFilter,
  rangeFilter,
  searchFilter
) => {
  console.info(
    spells,
  starredFilter,
  schoolFilter,
  rangeFilter,
  searchFilter
  )
  let visibleSpells = spells;
  if (starredFilter) {
    visibleSpells = visibleSpells.filter(s => s.starred);
  }

  switch (schoolFilter) {
    case SchoolFilters.ALL:
      visibleSpells = visibleSpells.filter(s => true);
      break;
    default:
      visibleSpells = visibleSpells.filter(s => s.school === schoolFilter);
  }

  switch (rangeFilter) {
    case RangeFilters.ALL:
      visibleSpells = visibleSpells.filter(s => true);
      break;
    default:
      visibleSpells = visibleSpells.filter(s => s.range.includes(rangeFilter));
  }

  const filteredNames = visibleSpells.filter(s =>
    s.name.toLowerCase().includes(searchFilter.toLowerCase())
  );
  const filteredDesc = visibleSpells.filter(
    s =>
      !filteredNames.includes(s) &&
      s.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  visibleSpells = filteredNames.concat(filteredDesc);

  return visibleSpells;
};

const mapStateToProps = state => {
  return {
    schoolOpen: state.schoolOpen,
    spells: getVisibleSpells(
      state.spells,
      state.filterStarred,
      state.schoolFilter,
      state.rangeFilter,
      state.searchFilter
    ),
    currentSpell: state.spell
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSchoolClick: school => {
      dispatch(toggleSchoolOpen(school));
    },
    onSpellClick: spell => {
      dispatch(selectSpell(spell));
      //dispatch(closeDrawer());
    }
  };
};

const VisibleSpells = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList);

export default VisibleSpells;
