import React from 'react'
import {useStyles} from './Style'
import {
  List,
  ListItem,
  Menu,
  MenuItem,
  Button,
  Divider,
} from '@material-ui/core'
import {
  FilterList,
} from '@material-ui/icons'
import VisibleSpells from '../../containers/VisibleSpells'
import Footer, {filterElementList} from '../Footer'

const DrawerContent = () => {

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleFilters = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <Button
            variant="contained"
            onClick={toggleFilters}
            startIcon={<FilterList />}
            endIcon={<FilterList />}
            size="small"
          >Filters</Button>
          <Menu
            id={id}
            keepMounted
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            {filterElementList.map((f) => {
              return (<MenuItem>{f}</MenuItem>)
            })}
          </Menu>
        </ListItem>
      </List>
      <Divider />
      <VisibleSpells />
    </div>
  )
}

export default DrawerContent
