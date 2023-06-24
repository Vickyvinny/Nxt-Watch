import styled from 'styled-components'

export const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
`

export const BodyContainer = styled.div`
  display: flex;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  overflow: auto;
  height: 90vh;
  @media screen and (max-width: 576px) {
    width: 100%;
    min-width: 390px;
  }
`

export const BannerHeading = styled.p`
  font-size: 25px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 90%;
  margin: 10px;
  min-width: 300px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const CloseButton = styled.button`
  align-self: end;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`

export const BannerLogo = styled.img`
  width: 200px;
  height: 50px;
`

export const BannerButton = styled.button`
  font-size: 13px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
`

export const InputBox = styled.input`
  border-radius: 5px;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
  width: 30%;
  margin-top: 20px;
  margin-left: 20px;
`

export const Button = styled.button`
  border: 1px solid #94a3b8;
  background-color: #ffffff;
  border-radius: 5px;
  height: 39px;
  width: 60px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 30vh;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
`
export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`

export const NoResultsMsg = styled.h1`
  color: ${props => props.textColor};
`

export const Suggestion = styled.p`
  color: ${props => props.textColor};
`
export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
  cursor: pointer;
`
