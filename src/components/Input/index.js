import React, { useState } from 'react';

import InputField from './InputField';
import Label from './Label';
import Wrapper from './Wrapper';

// Component Definition
const Input = ({
  label,
  variant,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');

  function handleBlur(evt) {
    setIsFocused(false)
    if (props.onBlur) {
      props.onBlur(evt)
    }
  }

  function handleChange(evt) {
    setValue(evt.target.value)
    if (props.onChange) {
      props.onChange(evt);
    }
  }

  function handleFocus(evt) {
    setIsFocused(true)
    if (props.onFocus) {
      props.onFocus(evt)
    }
  }

  return (
    <Wrapper>
      <InputField
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        value={value}
        variant={variant}
        {...props}
      />
      {label && (
        <Label
          isFocused={isFocused}
          hasValue={!!value}
        >
          {label}
        </Label>
      )}
    </Wrapper>
  )
}

export default Input;
