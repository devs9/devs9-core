import {MaskedInputProps} from 'react-text-mask'
import {InputProps} from '@material-ui/core/Input'
import {InputLabelProps} from '@material-ui/core/InputLabel'
import {FormControlProps} from '@material-ui/core/FormControl'

export type InputMaskComponent = InputProps['inputComponent']

export interface IInputMask {
  label?: string
  formProps?: FormControlProps
  labelProps?: InputLabelProps
}

export interface IInputCustomMask extends MaskedInputProps {
  inputRef: (ref: HTMLElement | null) => void
}

export interface IInput {
  mask?: boolean
  label?: string
  formProps?: FormControlProps
  labelProps?: InputLabelProps
}
