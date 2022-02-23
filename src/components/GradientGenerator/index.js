import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  ButtonContainer,
  Paragraph,
  InputColor,
  ColorContainer,
  GenerateButton,
  GradientDirectionList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: 'top',
    input1: '#8ae323',
    input2: '#014f7b',
    exportDirection: 'top',
    exportInput1: '#8ae323',
    exportInput2: '#014f7b',
  }

  onClickButton = value => {
    this.setState({activeDirection: value})
  }

  onChangeInput1 = event => {
    this.setState({input1: event.target.value})
  }

  onChangeInput2 = event => {
    this.setState({input2: event.target.value})
  }

  onClickGenerate = () => {
    const {activeDirection, input1, input2} = this.state
    this.setState({
      exportDirection: activeDirection,
      exportInput1: input1,
      exportInput2: input2,
    })
  }

  render() {
    const {
      exportDirection,
      exportInput1,
      exportInput2,
      activeDirection,
      input1,
      input2,
    } = this.state
    return (
      <MainContainer
        activeDirection={exportDirection}
        input1={exportInput1}
        input2={exportInput2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <GradientDirectionList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              details={eachItem}
              key={eachItem.directionId}
              onClickButton={this.onClickButton}
              activeDirection={activeDirection}
            />
          ))}
        </GradientDirectionList>
        <Paragraph>Pick the Colors</Paragraph>
        <ButtonContainer>
          <ColorContainer>
            <Paragraph htmlFor="input1">{input1}</Paragraph>
            <InputColor
              type="color"
              id="input1"
              value={input1}
              onChange={this.onChangeInput1}
            />
          </ColorContainer>
          <ColorContainer>
            <Paragraph htmlFor="input2">{input2}</Paragraph>
            <InputColor
              type="color"
              id="input2"
              value={input2}
              onChange={this.onChangeInput2}
            />
          </ColorContainer>
        </ButtonContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
