import styled from 'styled-components';

function getBorder(props) {
  return props.variant === 'outlined' ? '1px solid' : 'none'
}

function getBorderRadius(props) {
  return props.variant === 'outlined' ? '4px' : '0'
}

const InputField = styled.input`
  border: none;
  border-bottom: 1px solid;
  border-top: ${getBorder};
  border-left: ${getBorder};
  border-right: ${getBorder};
  border-color: #222222;
  border-radius: ${getBorderRadius};
  color: #222222;
  outline: none;
  padding: 4px;
  transition: 200ms;

  &:focus {
    border-color: #0000ff;
  }
`

export default InputField;
