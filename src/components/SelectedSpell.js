import React from 'react'
import { useTranslation } from 'react-i18next'

const SelectedSpell = ({spell}) => {
	const { t} = useTranslation()
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
      <h4>{t(spell.school)} / {spell.baseCastingNumber} / {t(spell.range)}</h4>
      <div>{spell.description}</div>
    </div>
  )
}

export default SelectedSpell
