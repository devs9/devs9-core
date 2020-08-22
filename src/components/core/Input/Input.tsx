import React, {FC, memo} from 'react'
import InputMui, {InputProps} from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'

import {InputMask} from './elements'
import type {IInput} from './ts'

export type {IInput}
export const Input: FC<IInput & InputProps> = memo(({mask, formProps, ...restProps}) => {
  /** constants */
  const inputMaskProps = {...restProps, formProps}

  /** components */
  const Field = formProps?.variant === "outlined" ? <OutlinedInput {...restProps} /> : <InputMui {...restProps} />
  const InputComponent = mask ? <InputMask {...inputMaskProps} /> : Field

  /** return */
  return <FormControl {...formProps}>{InputComponent}</FormControl>
})
