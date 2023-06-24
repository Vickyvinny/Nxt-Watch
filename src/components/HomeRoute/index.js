import {Component} from 'react'
import Cookies from 'js-cookie'
import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoItems from '../VideoItems'
import ThemeContext from '../../context/ThemeContext'
import {
  BodyContainer,
  ResponsiveContainer,
  BannerHeading,
  BannerContainer,
  CloseButton,
  BannerLogo,
  BannerButton,
  Button,
  InputBox,
  LoaderContainer,
  VideosListContainer,
  NoSearchResultsContainer,
  FailureImage,
  NoResultsMsg,
  Suggestion,
  RetryButtonInFailure,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    searchInputValue: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    bannerView: true,
  }

  componentDidMount() {
    this.getVideos()
    console.log(this.props)
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInputValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  closeBannerClicked = () => {
    this.setState({bannerView: false})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderNoVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#f9f9f9' : '#0f0f0f'
        return (
          <NoSearchResultsContainer>
            <FailureImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NoResultsMsg textColor={textColor}>
              No Search results found
            </NoResultsMsg>
            <Suggestion textColor={textColor}>
              Try different key words or remove search filter
            </Suggestion>
            <RetryButtonInFailure onClick={this.onClickRetry}>
              Retry
            </RetryButtonInFailure>
          </NoSearchResultsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = isDark => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.renderNoVideos()
        ) : (
          <VideosListContainer isDark={isDark}>
            {videosList.map(each => (
              <VideoItems key={each.id} itemDetails={each} />
            ))}
          </VideosListContainer>
        )}
      </>
    )
  }

  renderBannerView = () => {
    const {bannerView} = this.state
    return (
      <BannerContainer show={bannerView} data-testid="banner">
        <CloseButton data-testid="close" onClick={this.closeBannerClicked}>
          <GrClose />
        </CloseButton>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>Buy Nxt Watch Premium</BannerHeading>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContainer>
    )
  }

  renderViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)

      case apiStatusConstants.success:
        return this.renderVideos(isDark)

      case apiStatusConstants.inProgress:
        return this.renderLoader(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {searchInputValue, bannerView} = this.state
          return (
            <>
              <Header />
              <BodyContainer>
                <SideBar />
                <ResponsiveContainer data-testid="home" isDark={isDark}>
                  {bannerView && this.renderBannerView()}
                  <InputBox
                    id="search"
                    type="search"
                    value={searchInputValue}
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                  />
                  <Button
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onClickSearchButton}
                  >
                    <BiSearchAlt2 />
                  </Button>
                  {this.renderViews(isDark)}
                </ResponsiveContainer>
              </BodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default HomeRoute
