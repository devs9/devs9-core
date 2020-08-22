import React, {FC, memo} from 'react'
import InputMui, {InputProps} from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import {InputMask} from './elements'
import {IInput} from './ts'

export {IInput}
export const Input: FC<IInput & InputProps> = memo(({mask, ...restInputProps}) => {
  /** constants */
  const InputField = mask ? (
    <InputMask {...restInputProps} inputProps={restInputProps.inputProps} />
  ) : (
    <InputMui {...restInputProps} />
  )

  /** return */
  return <FormControl>{InputField}</FormControl>
})
