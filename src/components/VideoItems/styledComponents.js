import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 5px;
  margin-bottom: 10px;
  width: 24%;
  min-width: 250px;
  font-family: Roboto;
  color: ${props => (props.isDark ? '#f1f1f1' : '#64748b')};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    width: 100vw;
    min-width: 300px;
  }
`

export const VideoImage = styled.img`
  width: 100%;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  align-self: start;
  @media screen and (max-width: 576px) {
    justify-content: flex-start;
    padding-left: 5px;
    margin-left: 0px;
    width: 100p%;
  }
`

export const Profile = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
export const Card = styled.div``
export const Heading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#1e293b')};
  align-self: start;
`
export const Name = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0px;
`
export const Detail = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
  margin-right: 10px;
`
