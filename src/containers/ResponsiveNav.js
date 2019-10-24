import { connect } from "react-redux";
import { toggleDrawer } from "../actions";
import Nav from "../components/Nav";

const mapStateToProps = state => {
  return {
    open: state.drawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDrawerToggle: e => {
      dispatch(toggleDrawer());
    }
  };
};

const ResponsiveNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default ResponsiveNav;
