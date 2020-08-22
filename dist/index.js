'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var InputMui = _interopDefault(require('@material-ui/core/Input'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var MaskedInput = _interopDefault(require('react-text-mask'));

const phone = [
    '+',
    '3',
    '8',
    ' ',
    '(',
    /[0-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/
];
const masks = {
    phone
};

/**
 * Phone Mask
 * */
const InputPhoneMask = ({ inputRef, mask, ...other }) => React.useMemo(() => (React__default.createElement(MaskedInput, Object.assign({}, other, { showMask: true, type: "tel", id: "maskPhone", placeholderChar: "_", mask: masks.phone, ref: (ref) => inputRef(ref ? ref.inputElement : null) }))), // eslint-disable-next-line react-hooks/exhaustive-deps
[inputRef]);
const InputMask = React.memo(({ inputProps }) => (React__default.createElement(FormControl, null,
    React__default.createElement(InputMui, { inputProps: inputProps, inputComponent: InputPhoneMask }))));

// export {IInput}
const Input = React.memo(({ mask, inputProps }) => (React__default.createElement(FormControl, null, !mask ? React__default.createElement(InputMui, { inputProps: inputProps }) : React__default.createElement(InputMask, null))));

exports.Input = Input;
//# sourceMappingURL=index.js.map
