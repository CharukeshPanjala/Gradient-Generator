import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff79;
  border: 0px;
  color: #1e293b;
  padding: 10px;
  padding-left: 35px;
  padding-right: 35px;
  opacity: ${props => (props.isTrue ? 1 : 0.5)};
  border-radius: 5px;
  margin: 5px;
  font-weight: 600;
  cursor: pointer;
`
