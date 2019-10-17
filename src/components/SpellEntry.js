import React from 'react'
import PropTypes from 'prop-types'

const SpellEntry = ({onClick, starred, name}) => (
    <div
      onClick={onClick}
    >{starred} {name}
    </div>
)

SpellEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  starred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default SpellEntry
