import React, {FC, useMemo, memo} from 'react'
import MaskedInput from 'react-text-mask'
import FormControl from '@material-ui/core/FormControl'
import InputMui, {InputProps} from '@material-ui/core/Input'

import {masks} from '../../../../constants'
import {IInputCustomMask, InputMaskComponent} from '../ts'

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
        ref={(ref) => inputRef(ref ? ref.inputElement : null)}
      />
    ), // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputRef]
  )

export const InputMask: FC<InputProps> = memo(({inputProps}) => (
  <FormControl>
    <InputMui inputProps={inputProps} inputComponent={InputPhoneMask as InputMaskComponent} />
  </FormControl>
))
