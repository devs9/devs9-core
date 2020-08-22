import React, {FC, memo} from 'react'
import InputMui from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import {InputMask} from './elements'
import {IInput} from './ts'

export {IInput}
export const Input: FC<IInput> = memo(({mask, ...restInputProps}) => {
  const InputField = mask ? (
    <InputMask {...restInputProps} inputProps={restInputProps.inputProps} />
  ) : (
    <InputMui {...restInputProps} />
  )

  /** return */
  return <FormControl>{InputField}</FormControl>
})
