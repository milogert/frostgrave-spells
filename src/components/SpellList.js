import React from 'react'
import PropTypes from 'prop-types'
import SpellItem from './SpellItem'
import spells from '../spells'

const SpellList = ({ onSpellClick }) => (
  <div>
    {spells.map((spell, index) => (
      <SpellItem key={index} {...spell} onClick={() => onSpellClick(index)}/>
    ))}
  </div>
)

SpellList.propTypes = {
  onSpellClick: PropTypes.func.isRequired,
}

export default SpellList
