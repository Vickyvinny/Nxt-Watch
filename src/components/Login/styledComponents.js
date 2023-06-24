import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-height: 60vh;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 0px 1px 1px ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-bottom: 50px;
`

export const Image = styled.img`
  width: 25%;
`

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px;
`

export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
`

export const Input = styled.input`
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
`

export const ShowPassword = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`

export const CheckBox = styled.input`
  margin-top: 5px;
  margin-right: 5px;
`

export const LoginButton = styled.button`
  margin-top: 50px;
  border: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  height: 40px;
`

export const ErrorMsg = styled.p`
  color: red;
`
