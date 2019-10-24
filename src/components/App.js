import React from 'react'
import SelectedSpellDisplay from '../containers/SelectedSpellDisplay'
import ResponsiveNav from '../containers/ResponsiveNav'
import {useStyles} from './Style'
import {
  CssBaseline,
} from '@material-ui/core';
import ResponsiveBar from '../containers/ResponsiveBar'

const App = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
      <CssBaseline />
      <ResponsiveBar />
      <ResponsiveNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <SelectedSpellDisplay />
      </main>
    </div>
  )
}

export default App
