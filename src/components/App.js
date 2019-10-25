import React from "react";
import SelectedSpellDisplay from "../containers/SelectedSpellDisplay";
import ResponsiveNav from "../containers/ResponsiveNav";
import { useStyles } from "./Style";
import {
  CssBaseline,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import ResponsiveBar from "../containers/ResponsiveBar";
import {ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';


const App = () => {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: orange,
      },
    }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <ResponsiveBar />
        <ResponsiveNav />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.paper}>
            <SelectedSpellDisplay />
          </Paper>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
