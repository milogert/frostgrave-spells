import React from 'react'
import {useStyles} from './drawer/Style'
import {
  Drawer,
  Hidden,
} from '@material-ui/core'
import Content from './drawer/Content'

const Nav = () => {
  const classes = useStyles()
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {/*<Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
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
      </Hidden>*/}
      <Hidden xsDown implementation="css">
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
