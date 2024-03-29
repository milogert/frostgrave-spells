import { makeStyles } from "@material-ui/core/styles";

export const drawerWidth = 300;
export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2, 2),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  filterPopover: {
    paddingTop: "1rem",
    paddingBottom: "1rem"
  },
  icon: {
    height: "1em",
    width: "1em",
    color: "#282828"
  }
}));
