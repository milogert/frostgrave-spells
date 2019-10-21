import React from 'react'
import PropTypes from 'prop-types'
import StarLink from '../containers/StarLink'
import {
  ListItem,
  ListItemText,
} from '@material-ui/core'

const SpellEntry = ({attrs, onClick, spell, name, description, starred}) => (
  <ListItem {...attrs} button onClick={onClick}>
    <ListItemText primary={name} />
    <StarLink spell={spell} starred={starred}>Star</StarLink>
  </ListItem>
)

SpellEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  spell: PropTypes.object.isRequired,
  starred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpellEntry
