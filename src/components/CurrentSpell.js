import React from 'react'
import PropTypes from 'prop-types'

const CurrentSpell = ({name, description, outOfGame}) => (
  <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Out of game: {outOfGame}</p>
  </div>
)

CurrentSpell.propTypes = {
  spell: PropTypes.object.isRequired,
}

export default CurrentSpell
