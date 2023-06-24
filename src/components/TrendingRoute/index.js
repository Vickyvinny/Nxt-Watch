import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiOutlineFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoItems from '../VideoItems'
import ThemeContext from '../../context/ThemeContext'
import {
  BodyContainer,
  ResponsiveContainer,
  LoaderContainer,
  VideosListContainer,
  IconContainer,
  Heading,
  LinkItem,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderVideos = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(each => (
          <VideoItems key={each.id} itemDetails={each} />
        ))}
      </VideosListContainer>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.success:
        return this.renderVideos()

      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <BodyContainer>
                <SideBar />
                <ResponsiveContainer data-testid="trending" isDark={isDark}>
                  <LinkItem isDark={isDark}>
                    <IconContainer darkMode={isDark}>
                      <HiOutlineFire className="header-icon" />
                    </IconContainer>
                    <Heading isDark={isDark}>Trending</Heading>
                  </LinkItem>
                  {this.renderViews()}
                </ResponsiveContainer>
              </BodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default TrendingRoute
