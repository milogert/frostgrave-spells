import React from 'react'
import {useStyles} from './Style'
import {useTheme} from '@material-ui/core/styles'
import {
  Drawer,
  Hidden,
} from '@material-ui/core'
import Content from './drawer/Content'

const Nav = ({open, handleDrawerToggle}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <nav className={classes.drawer} aria-label="spell list">
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Content/>
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Content/>
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Nav
