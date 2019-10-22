import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {useStyles} from './Style'
import {useTheme} from '@material-ui/core/styles'

const Bar = ({toggleDrawer}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Frosty Spells
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Bar
