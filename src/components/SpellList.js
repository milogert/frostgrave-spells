import React from 'react'
import PropTypes from 'prop-types'
import SpellEntry from './SpellEntry'

const SpellList = ({ spells, onSpellClick }) => (
  <div>
    {spells.map((spell, index) => (
      <SpellEntry key={index} id={index} {...spell} onClick={() => onSpellClick(index)}/>
    ))}
  </div>
)

SpellList.propTypes = {
  spells: PropTypes.object.isRequired,
  onSpellClick: PropTypes.func.isRequired,
}

export default SpellList
