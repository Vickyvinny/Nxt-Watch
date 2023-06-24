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
  }
`

export const BannerHeading = styled.h1`
  font-size: 25px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 90%;
  margin: 10px;
`

export const CloseButton = styled.button`
  align-self: end;
  background-color: transparent;
  border-style: none;
`

export const BannerLogo = styled.img`
  width: 200px;
  height: 50px;
`

export const BannerButton = styled.button`
  font-size: 15px;
`

export const InputBox = styled.input`
  font-size: 25px;
  margin-left: 10px;
  margin-top: 10px;
`

export const Button = styled.button`
  font-size: 25px;
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
  @media screen and (max-width: 576px) {
    margin: 0px;
    padding-left: 0px;
  }
`
export const SavedVideosContentContainer = styled.div`
  min-height: 100px;
  width: 88%;
  padding: 25px;
  margin-top: 50px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const NoSavedVideos = styled.img`
  width: 50%;
`
export const NoSavesVideosText = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  margin-right: 10px;
  font-size: 25px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  color: ${props => (!props.isDark ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding-left: 0px;
    margin: 10px 0px 10px 0px;
  }
`
export const Heading = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
  font-size: 40px;
`
