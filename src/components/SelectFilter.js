import React from 'react'
import {
  NativeSelect,
} from '@material-ui/core'

const SelectFilter = ({onChange, value, optionMap}) => {
  return (
    <NativeSelect
      value={value}
      onChange={onChange}
    >
      {Object.keys(optionMap).map((key, index) => 
        <option key={key} value={key}>{optionMap[key]}</option>
      )}
    </NativeSelect>
  )
}

export default SelectFilter
