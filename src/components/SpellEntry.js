import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import StarLink from '../containers/StarLink'
import {
  ListItem,
  ListItemText,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  goldStar: {
    color: 'gold',
  },
}))

const SpellEntry = ({onClick, spell, name, description, starred, selected}) => {
  const classes = useStyles();
	const { t } = useTranslation()
  return (
    <ListItem button onClick={onClick} selected={selected}>
      <ListItemText primary={t(name)} className={classes.nested}/>
      <StarLink attrs={{className: classes.goldStar}} spell={spell} starred={starred}>Star</StarLink>
    </ListItem>
  )
}

SpellEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  spell: PropTypes.object.isRequired,
  starred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpellEntry
