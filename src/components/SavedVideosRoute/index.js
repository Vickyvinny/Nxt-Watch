import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItems from '../VideoItems'
import ThemeContext from '../../context/ThemeContext'
import {
  BodyContainer,
  ResponsiveContainer,
  VideosListContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  IconContainer,
  Heading,
  LinkItem,
} from './styledComponents'

const SavedVideosRoute = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value

      const renderVideos = () => (
        <>
          <LinkItem isDark={isDark}>
            <IconContainer darkMode={isDark}>
              <BiListPlus className="header-icon" />
            </IconContainer>
            <Heading isDark={isDark}>Saved Videos</Heading>
          </LinkItem>
          <VideosListContainer>
            {savedVideosList.map(each => (
              <VideoItems key={each.id} itemDetails={each} />
            ))}
          </VideosListContainer>
        </>
      )

      return (
        <>
          <Header />
          <BodyContainer>
            <SideBar />
            <ResponsiveContainer data-testid="savedVideos" isDark={isDark}>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText isDark={isDark}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion isDark={isDark}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderVideos()
              )}
            </ResponsiveContainer>
          </BodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosRoute
