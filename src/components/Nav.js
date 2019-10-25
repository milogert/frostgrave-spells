import React from "react";
import { useStyles } from "./Style";
import { useTheme } from "@material-ui/core/styles";
import { SwipeableDrawer, Drawer, Hidden } from "@material-ui/core";
import Content from "./drawer/Content";

const Nav = ({ open, handleDrawerToggle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <nav className={classes.drawer} aria-label="spell list">
      <Hidden smUp>
        <SwipeableDrawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <Content />
        </SwipeableDrawer>
        {/*<Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <Content />
        </Drawer>*/}
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <Content />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
