import React from "react";
import { useTranslation } from "react-i18next";
import { tipFilter } from "../tooltips";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  p: {
    marginTop: "1em",
    marginBottom: "1em",
  },
}))

const SelectedSpell = ({ spell }) => {
  const classes = useStyles()
  const { t } = useTranslation();
  if (Object.keys(spell).length === 0) {
    return (
      <div>
        <h2>Select a spell from the menu.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{spell.name}</h2>
      <h4>
        {t(spell.school)} / {spell.baseCastingNumber} / {spell.range.map(t).join(", ")}
      </h4>
      <div className={classes.p}>{tipFilter(spell.description)}</div>
    </div>
  );
};

export default SelectedSpell;
