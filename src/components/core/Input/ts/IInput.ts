import {MaskedInputProps} from 'react-text-mask'
import {InputProps} from '@material-ui/core/Input'

export type InputMaskComponent = InputProps['inputComponent']

export interface IInputCustomMask extends MaskedInputProps {
  inputRef: (ref: HTMLElement | null) => void
}

export interface IInput extends InputProps {
  mask?: boolean
}
