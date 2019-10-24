import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const ToggleIconButton = ({ icon, attrs, onClick }) => {
  return (
    <IconButton
      size="small"
      {...attrs}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {icon}
    </IconButton>
  );
};

ToggleIconButton.defaultProps = {
  attrs: {}
};

ToggleIconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  attrs: PropTypes.object
};

export default ToggleIconButton;
