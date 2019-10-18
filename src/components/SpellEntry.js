import React from 'react'
import PropTypes from 'prop-types'
import StarLink from '../containers/StarLink'

const SpellEntry = ({onClick, id, name, description, starred}) => (
  <div onClick={onClick}>
    <StarLink id={id} starred={starred}>Star</StarLink>
    {name} - {description}
  </div>
)

SpellEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  starred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpellEntry
