import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectFilter = ({name, onChange, value, optionMap}) => {
  const classes = useStyles()
	const { t} = useTranslation()
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{t(name)}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          id: name
        }}
      >
        {Object.keys(optionMap).map((key, index) => 
          <MenuItem key={key} value={key}>{t(key)}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}

export default SelectFilter
