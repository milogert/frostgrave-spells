import React from 'react'
import {
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const FilterSwitch = ({label, checked, onSwitch}) => {
	const {t} = useTranslation();
	return (
		<FormControlLabel
      className={"test"}
      control={
        <Switch
          checked={checked}
          onChange={onSwitch}
          value={label}
      	/>
      }
      label={t(label)}
 		/>
	)
}

export default FilterSwitch
