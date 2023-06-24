/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  padding-left: 10px;
  width: 15%;
  min-width: 200px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  @media screen and (max-width: 576px) {
    display: ${props => (props.showSideBar ? 'flex' : 'none')};
    overflow-y: auto;
  }
`

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 10px;
  margin-top: 0px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-left: 0px;
`

export const OptionItem = styled.li`
  margin-left: 0px;
  padding-left: 10px;
  background-color: ${props =>
    props.active ? (props.isDark ? '#383838' : '#cccccc') : ''};
  color: ${props =>
    props.active
      ? props.isDark
        ? '#ff0000'
        : 'blue'
      : props.isDark
      ? 'white'
      : 'black'};
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`

export const ContactsContainer = styled.div`
  align-self: flex-start;
`

export const Heading = styled.p`
  font-size: 18px;
`

export const SocialMediaContainer = styled.div``

export const SocialMedia = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`
