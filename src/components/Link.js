import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '@material-ui/core'

const Link = ({ active, children, onClick }) => (
    <Button
      disabled={active}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </Button>
  )

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
