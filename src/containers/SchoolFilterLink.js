import { connect } from "react-redux";
import { setSchoolFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.schoolFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSchoolFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
