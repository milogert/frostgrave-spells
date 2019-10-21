import React from 'react'
import PropTypes from 'prop-types'
import SpellEntry from './SpellEntry'
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons'
import {SchoolFilters} from '../actions'
import {useStyles} from './drawer/Style'

const SpellList = ({ schoolOpen, spells, onSchoolClick, onSpellClick }) => {
  const classes = useStyles();
  const spellEntryItems = {}

  Object.keys(SchoolFilters).forEach((school) => {
    const name = SchoolFilters[school]
    const schoolSpellList = spells.filter(s => s.school === name)
    if (schoolSpellList.length === 0)
      return

    spellEntryItems[name] = spells.filter(s => s.school === name)
  })

  if (Object.keys(spellEntryItems).length === 0) {
    return (<List>
      <ListItem>
        <ListItemText>Modify your filters to see spells here.</ListItemText>
      </ListItem>
    </List>)
  }

  return (
    <List>
      {Object.keys(spellEntryItems).map(school => (
        
        <div>
          <ListItem button school={school} onClick={() => onSchoolClick(school)}>
            <ListItemText primary={school} />
            {schoolOpen[school] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        <Collapse key={school} in={schoolOpen[school]}>
          <List disablePadding>
            {spellEntryItems[school].map((spell, index) => (
              <SpellEntry
                attrs={{className: classes.nested}}
                key={school + '_' + spell.name}
                spell={spell}
                {...spell}
                onClick={() => onSpellClick(spell)}
              />
            ))}
          </List>
        </Collapse>
          </div>
      ))}
    </List>
  )
}

SpellList.propTypes = {
  spells: PropTypes.array.isRequired,
  onSpellClick: PropTypes.func.isRequired,
}

export default SpellList
