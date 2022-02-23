import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.activeDirection},
    ${props => props.input1},
    ${props => props.input2}
  );
`

export const Heading = styled.h1`
  color: #ededed;
`
export const Paragraph = styled.p`
  color: #ffffff79;
  font-weight: 500;
  font-size: 21px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ButtonContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const InputColor = styled.input`
  outline: none;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
`

export const ColorContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: 0px;
  color: ##1e293b;
  padding: 10px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 5px;
  margin: 5px;
  font-weight: 600;
  cursor: pointer;
`
