import React from "react";
import { connect } from "react-redux";
import { toggleStar } from "../actions";
import ToggleIconButton from "../components/ToggleIconButton";
import { Star } from "@material-ui/icons";
import StarBorder from "@material-ui/icons/StarBorder";

const mapStateToProps = (state, ownProps) => {
  return {
    icon: ownProps.starred ? <Star /> : <StarBorder />
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleStar(ownProps.school, ownProps.name));
    }
  };
};

const StarLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleIconButton);

export default StarLink;
