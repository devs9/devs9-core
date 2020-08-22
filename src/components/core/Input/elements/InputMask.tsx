import React, {FC, useMemo, memo} from 'react'
import MaskedInput from 'react-text-mask'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputMui from '@material-ui/core/Input'

import {masks} from '../../../../constants'
import {InputMaskComponent, IInputCustomMask, IInputMask} from '../ts'

/**
 * Phone Mask
 * */
const InputPhoneMask: FC<IInputCustomMask> = ({inputRef, mask, ...other}) =>
  useMemo(
    () => (
      <MaskedInput
        {...other}
        showMask
        type="tel"
        id="maskPhone"
        placeholderChar="_"
        mask={masks.phone}
        ref={ref => inputRef(ref ? ref.inputElement : null)}
      />
    ), // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputRef]
  )

// export type {IInputMask}
export const InputMask: FC<IInputMask> = memo(({formProps, ...inputProps} )=> {
  let Field


  const inputMaskProps = {
    ...inputProps,
    inputComponent: InputPhoneMask as InputMaskComponent
  }

  if (formProps?.variant === "outlined") {
    Field = <OutlinedInput {...inputMaskProps} />
  } else {
    Field = <InputMui {...inputMaskProps} />
  }

  return (
    <FormControl {...formProps}>
      {Field}
    </FormControl>
  )
})
