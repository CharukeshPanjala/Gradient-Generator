import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickButton, activeDirection} = props
  const {directionId, value, displayText} = details

  const onClickDirection = () => {
    onClickButton(value)
  }
  console.log(props)
  return (
    <li key={directionId}>
      <Button
        type="button"
        onClick={onClickDirection}
        isTrue={activeDirection === value}
      >
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
