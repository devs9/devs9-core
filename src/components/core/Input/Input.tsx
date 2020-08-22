import React, {FC, memo} from 'react'
import InputMui, {InputProps} from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import {InputMask} from './elements'
import {IInput} from './ts'

export {IInput}
export const Input: FC<IInput & InputProps> = memo(({mask, formProps, ...restProps}) => {
  console.log(formProps)
  /** constants */
  const InputComponent = mask ? <InputMask {...restProps} /> : <InputMui {...restProps} />

  /** return */
  return <FormControl>{InputComponent}</FormControl>
})
