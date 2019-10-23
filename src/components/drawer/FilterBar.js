import React from 'react'
import {
  IconButton,
  InputBase,
  Divider,
  Menu,
  MenuItem,
} from '@material-ui/core'
import {
  FilterList,
  Clear,
} from '@material-ui/icons'
import {filterElementList} from '../Footer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


const FilterBar = ({onChange, searchValue, clearSearch, resetFilters}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const toggleFilters = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={classes.root}>
      <InputBase
        size="large"
        className={classes.input}
        placeholder="Search Spellbook"
        inputProps={{ 'aria-label': 'search spellbook' }}
        onChange={onChange}
        value={searchValue}
      />
      {searchValue &&
          <IconButton
            variant="contained"
            size="small"
            onClick={clearSearch}
          >
            <Clear />
          </IconButton>
      }
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        variant="contained"
        onClick={toggleFilters}
        size="small"
      >
        <FilterList />
      </IconButton>
      <Menu
        id={id}
        keepMounted
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {filterElementList.map((f, index) => {
          return <MenuItem key={index}>{f}</MenuItem>
        })}
        <MenuItem onClick={resetFilters}>Reset Filters</MenuItem>
      </Menu>
    </div>
  )
}

export default FilterBar
