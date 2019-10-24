import { connect } from "react-redux";
import { setRangeFilter, RangeFilters } from "../actions";
import SelectFilter from "../components/SelectFilter";

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.rangeFilter,
    optionMap: RangeFilters
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      dispatch(setRangeFilter(e.target.value));
    }
  };
};

const RangeSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter);

export default RangeSelectFilter;
