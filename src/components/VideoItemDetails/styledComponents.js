import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
  overflow: auto;
  height: 90vh;
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 10px 0px 0px 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20vh;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  width: 100%;
`

export const Profile = styled.img`
  height : 80px;
  width : 80px
  margin-left : 50px;
  align-self : flex-start;
  margin-top : 10px
  @media screen and (max-width : 576px) {
      height : 60px;
      width : 60px;
  }
`
export const Card = styled.div`
  margin-left: 20px;
`
export const Heading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#1e293b')};
`
export const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 0px;
  height: 70px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    flex-direction: column;
  }
`
export const Detail = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#64748b')};
  margin-right: 10px;
  padding: 0px;
  margin: 2px;
`
export const Button = styled.button`
  border-style: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 0px;
`

export const Description = styled.h1`
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#64748b' : '#1e293b')};
  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 15px;
  }
`

export const ButtonName = styled.span`
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.clicked ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 576px) {
    font-size: 12px;
    margin-right: 5px;
  }
`

export const ButtonsCountContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    width: 90%;
    height: 60px;
    padding: 0px;
    margin: 2px;
  }
`
export const DescriptionContainer = styled.div`
  width: 90%;
  padding: 0px 10px 0px 10px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    width: 379px;
  }
`

export const ButtonsContainer = styled.div`
  @media screen and (max-width: 576px) {
    align-self: center;
  }
`

export const ViewCount = styled.p`
  color: #64748b;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
