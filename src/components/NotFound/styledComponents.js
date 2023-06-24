import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  overflow: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  max-height : 750px
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  width: 90%;
`

export const Tag = styled.p`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
  font-size: 20px;
`

export const Heading = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
  font-size: 40px;
`
