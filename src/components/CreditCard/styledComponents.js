// Style your elements here

// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`
export const MainHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  padding: 50px;
  border-radius: 10px;
  width: 30vw;
  height: 30vh;
  background-size: cover;
  color: #ffffff;
`
export const CardHeading = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`

export const Input = styled.input`
  outline: none;
  padding: 5px;
  border: 1px solid #475569;
  border-radius: 3px;
  margin: 10px;
`
export const InputContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  margin-top: 20px;
  width: 30vw;
  text-align: center;
`
export const CardHolderName = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  justify-content: flex-start;
`
