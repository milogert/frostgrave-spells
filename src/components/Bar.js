import React from "react";
import { Popover, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import {drawerWidth} from './Style'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
	typography: {
		padding: theme.spacing(2),
	},
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
}));

const Bar = ({ toggleDrawer }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleInformationClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleInformationClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        <Typography className={classes.title} variant="h6" noWrap>
          Frostgrave Spellbook
        </Typography>
        <div>
          <IconButton
            color="inherit"
            aria-label="application information"
            onClick={handleInformationClick}
          >
            <InfoIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleInformationClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>
              <p>Made by <b>Milo Gertjejansen</b> with React, Redux, and Material UI and icons from <a href="https://game-icons.net/">Game-icons.net</a></p>
            </Typography>
          </Popover>
          <IconButton
            color="inherit"
            aria-label="link to repository"
            edge="end"
            href="https://github.com/milogert/frostgrave-spells"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
