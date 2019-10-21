import React from 'react'
import {useStyles} from './Style'
import {
  Divider,
} from '@material-ui/core'
import VisibleSpells from '../../containers/VisibleSpells'
import Footer from '../Footer'

const DrawerContent = () => {

  const classes = useStyles()

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <VisibleSpells />
      <Divider />
      <p>Below divider</p>
      <Footer />
    </div>
  )
}

export default DrawerContent
