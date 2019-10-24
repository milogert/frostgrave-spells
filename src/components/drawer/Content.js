import React from "react";
import { useStyles } from "../Style";
import { Divider } from "@material-ui/core";
import VisibleSpells from "../../containers/VisibleSpells";
import FilterBarCont from "../../containers/FilterBarCont";

const DrawerContent = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <FilterBarCont />
      <Divider />
      <VisibleSpells />
    </div>
  );
};

export default DrawerContent;
