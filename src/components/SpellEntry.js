import React from 'react'
import PropTypes from 'prop-types'
import StarLink from '../containers/StarLink'
import {
  ListItem,
  ListItemText,
} from '@material-ui/core'
import {useStyles} from './Style'

const SpellEntry = ({onClick, spell, name, description, starred, selected}) => {
  const classes = useStyles();
  return (
    <ListItem button onClick={onClick} selected={selected}>
      <ListItemText primary={name} className={classes.nested}/>
      <StarLink style={{color: 'gold'}} spell={spell} starred={starred}>Star</StarLink>
    </ListItem>
  )
}

SpellEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  spell: PropTypes.object.isRequired,
  starred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpellEntry
