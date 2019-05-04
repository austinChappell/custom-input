import styled from 'styled-components';

function getColor(props) {
  if (props.isFocused) {
    return '#0000ff';
  }
  if (props.hasValue) {
    return '#000000';
  }
  return '#cccccc'
}

const Label = styled.label`
  background-color: ${props => props.isFocused || props.hasValue ? '#ffffff' : '#ffffff00'};
  border-radius: 4px;
  color: ${getColor};
  font-size: ${props => props.isFocused || props.hasValue ? '8px' : 'inherit'};
  left: 4px;
  padding: 0 2px;
  pointer-events: none;
  position: absolute;
  top: ${props => props.isFocused || props.hasValue ? '1px' : '3px'};
  transition: 200ms;
  transform: ${props => `translateY(${props.isFocused || props.hasValue ? '-50%' : '0%'})`};
`

export default Label;