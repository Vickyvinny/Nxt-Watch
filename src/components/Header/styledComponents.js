import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  @media screen and (max-width: 576px) {
    padding-left: 0px;
  }
`

export const Logo = styled.img`
  height: 40px;
  width: 150px;
`

export const ButtonContainer = styled.div`
  width: 10%;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 576px) {
    min-width: 150px;
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  }
`

export const Image = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  border-style: none;
  background-color: transparent;
  padding: 0px;
`

export const LogoutButton = styled.button`
  border-style: solid;
  border-radius: 5px;
  background-color: ${props => props.logOutBtn};
  color: ${props => props.text};
  padding: 5px;
  width: 96px;
  border-color: #3b82f6;
  border-width: 3px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const PopupButton = styled.button`
  border-style: solid;
  border-radius: 5px;
  border-color: ${props => (props.cancel ? '#0f0f0f' : ' #3b82f6')};
  background-color: ${props => (props.cancel ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.cancel ? '#0f0f0f' : '#f9f9f9')};
  padding: 5px;
  margin: 10px;
  width: 96px;
`
export const PopupContainer = styled.div`
  margin: 0px;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#f9f9f9')};
`
export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px;
`

export const Heading = styled.p`
  color: 'red';
`
export const HamButton = styled.button`
  border-style: none;
  background-color: transparent;
  padding: 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 30px;
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`
