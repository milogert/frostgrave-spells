import React from 'react'

const SelectedSpell = ({spell}) => {
  if (Object.keys(spell).length === 0) {
    return (
      <div>
        <h2>Select a spell from the left.</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>{spell.name}</h2>
      <div>{spell.description}</div>
    </div>
  )
}

export default SelectedSpell
