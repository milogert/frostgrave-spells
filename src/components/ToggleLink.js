import React from 'react'
import PropTypes from 'prop-types'

const ToggleLink = ({ text, onClick }) => {
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {text}
    </a>
  )
}

ToggleLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ToggleLink

