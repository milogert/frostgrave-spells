import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import SpellListEntry from "../containers/SpellListEntry";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { SchoolFilters } from "../actions";
import { schoolIcon } from "../icons/Schools";

const SpellList = ({
  schoolOpen,
  spells,
  onSchoolClick,
  onSpellClick,
  currentSpell
}) => {
  const spellEntryItems = {};
  const { t } = useTranslation();

  Object.keys(SchoolFilters).forEach(school => {
    const name = SchoolFilters[school];
    const schoolSpellList = spells.filter(s => s.school === name);
    if (schoolSpellList.length === 0) return;

    spellEntryItems[name] = spells.filter(s => s.school === name);
  });

  if (Object.keys(spellEntryItems).length === 0) {
    return (
      <List>
        <ListItem>
          <ListItemText>Modify your filters to see spells here.</ListItemText>
        </ListItem>
      </List>
    );
  }

  return (
    <List component="nav" aria-labelledby="spell-list-label">
      {Object.keys(spellEntryItems).map(school => (
        <div key={school}>
          <ListItem
            button
            school={school}
            onClick={() => onSchoolClick(school)}
          >
            {schoolIcon(school)}
            <ListItemText primary={t(school)} />
            {schoolOpen[school] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse key={school} in={schoolOpen[school]}>
            <List disablePadding>
              {spellEntryItems[school].map((spell, index) => (
                <SpellListEntry
                  key={school + "_" + spell.name + "_" + index}
									spell={spell}
                  selected={currentSpell === spell}
                />
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

SpellList.propTypes = {
  spells: PropTypes.array.isRequired,
  onSpellClick: PropTypes.func.isRequired
};

export default SpellList;
