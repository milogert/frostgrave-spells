import { connect } from "react-redux";
import { toggleDrawer } from "../actions";
import Bar from "../components/Bar";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: e => {
      dispatch(toggleDrawer());
    }
  };
};

const ResponsiveBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);

export default ResponsiveBar;
