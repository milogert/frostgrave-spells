import { makeStyles} from '@material-ui/core/styles';

export const drawerWidth = 300;
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  filterPopover: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  icon: {
    height: "1em",
    width: "1em",
    color: "#282828",
  },
}));
