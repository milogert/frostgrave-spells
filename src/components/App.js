import React from 'react'
import Footer from './Footer'
import SelectedSpellDisplay from '../containers/SelectedSpellDisplay'
import VisibleSpells from '../containers/VisibleSpells'
import './App.css'

const App = () => (
  <div className="App">
    <VisibleSpells />
    <SelectedSpellDisplay />
    <Footer />
  </div>
  )

export default App;
