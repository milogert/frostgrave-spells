import React from 'react'

const SelectedSpell = ({spell}) => (
  <div>
    <h2>{spell.name}</h2>
    <div>{spell.description}</div>
  </div>
)

export default SelectedSpell
