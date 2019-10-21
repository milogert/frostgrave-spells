import React from 'react'
import SelectedSpellDisplay from '../containers/SelectedSpellDisplay'
import VisibleSpells from '../containers/VisibleSpells'
import Nav from './Nav'
//import './App.css'
import {useStyles} from './drawer/Style'
import {
  CssBaseline,
} from '@material-ui/core';
import Bar from './Bar'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Bar />
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <SelectedSpellDisplay />
      </main>
    </div>
  )
}

export default App;
