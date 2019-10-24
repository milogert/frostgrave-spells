import { connect } from "react-redux";
import { setRangeFilter } from "../../actions";
import Link from "../../components/Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.rangeFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setRangeFilter(ownProps.filter));
    }
  };
};

const RangeFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default RangeFilterLink;
