import { connect } from "react-redux";
import { closeDrawer, selectSpell } from "../actions";
import SpellEntry from '../components/SpellEntry'

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectSpell(ownProps.spell));
      dispatch(closeDrawer());
    }
  };
};

const SpellListEntry = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellEntry);

export default SpellListEntry;
