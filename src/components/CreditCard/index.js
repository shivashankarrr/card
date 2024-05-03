// Write your code here
// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  MainHeading,
  CardContainer,
  CardHeading,
  Input,
  InputContainer,
  CardHolderName,
} from './styledComponents'

function PasswordValidator() {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNo = event => {
    setCardNo(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value.toUpperCase())
  }

  return (
    <BgContainer>
      <MainHeading color="#ffffff">Credit Card</MainHeading>
      <CardContainer data-testid="creditCard">
        <CardHeading>{cardNo}</CardHeading>
        <CardHolderName fontWeight="500" fontSize="12px">
          CARDHOLDER NAME
        </CardHolderName>
        <CardHolderName fontWeight="700" fontSize="15px">
          {name}
        </CardHolderName>
      </CardContainer>
      <InputContainer>
        <MainHeading color="#3b4b69">Payment Method</MainHeading>
        <Input
          type="text"
          placeholder="Card Number"
          onChange={onChangeCardNo}
          value={cardNo}
        />
        <Input
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeName}
          value={name}
        />
      </InputContainer>
    </BgContainer>
  )
}

export default PasswordValidator
