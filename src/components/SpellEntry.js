import React from 'react'
import PropTypes from 'prop-types'
import StarLink from '../containers/StarLink'
import {
  ListItem,
} from '@material-ui/core'

const SpellEntry = ({onClick, spell, name, description, starred}) => (
  <ListItem button onClick={onClick}>
    <StarLink spell={spell} starred={starred}>Star</StarLink>
    {name}
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
