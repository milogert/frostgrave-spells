import React from "react";
import { Trans } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const Link = ({ active, children, onClick }) => (
  <Button
    disabled={active}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    <Trans>{children}</Trans>
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
