import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'
import {
  BodyContainer,
  ResponsiveContainer,
  LoaderContainer,
  VideoContainer,
  CardContainer,
  Profile,
  Card,
  Heading,
  Name,
  DetailsContainer,
  Detail,
  Button,
  Description,
  ButtonsCountContainer,
  DescriptionContainer,
  ButtonName,
  ButtonsContainer,
  ViewCount,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const videoDetails = data.video_details

      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        videoUrl: videoDetails.video_url,
        description: videoDetails.description,
      }

      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState({liked: true, disliked: false})
  }

  onClickDislike = () => {
    this.setState({disliked: true, liked: false})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderVideo = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, onClickSaveVideo, savedVideosList} = value
        const {videoData, liked, disliked} = this.state
        const {videoUrl} = videoData
        const {
          channel,
          publishedAt,
          title,
          viewCount,
          description,
          id,
          subscriberCount,
        } = videoData
        const getVideo = savedVideosList.find(each => each.id === id)
        let saved = true
        if (getVideo === undefined) {
          saved = false
        }
        const {name, profileImageUrl} = channel
        const likeClass = liked ? 'clicked' : ''
        const disLikeClass = disliked ? 'clicked' : ''
        const savedClass = saved ? 'clicked' : ''
        const isSavedText = saved ? 'Saved' : 'Save'
        const onVideoSave = () => {
          onClickSaveVideo(videoData)
        }
        return (
          <>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls width="95%" height="45vw" />
              <DescriptionContainer>
                <Heading>{title}</Heading>
                <ButtonsCountContainer>
                  <DetailsContainer>
                    <Detail>{viewCount} Views</Detail>
                    <Detail>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </Detail>
                  </DetailsContainer>
                  <ButtonsContainer>
                    <Button type="button" onClick={this.onClickLike}>
                      <AiOutlineLike className={`icon ${likeClass}`} />
                      <ButtonName clicked={liked}>Like</ButtonName>
                    </Button>
                    <Button type="button" onClick={this.onClickDislike}>
                      <AiOutlineDislike className={`icon ${disLikeClass}`} />
                      <ButtonName clicked={disliked}>Dislike</ButtonName>
                    </Button>
                    <Button type="button" onClick={onVideoSave}>
                      <BiListPlus className={`icon ${savedClass}`} />
                      <ButtonName clicked={saved}>{isSavedText}</ButtonName>
                    </Button>
                  </ButtonsContainer>
                </ButtonsCountContainer>
                <div>
                  <hr />
                </div>

                <CardContainer>
                  <Profile src={profileImageUrl} alt="name" />
                  <Card>
                    <Name>{name}</Name>
                    <ViewCount>{subscriberCount}</ViewCount>
                    <Description isDark={isDark}>{description}</Description>
                  </Card>
                </CardContainer>
              </DescriptionContainer>
            </VideoContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.success:
        return this.renderVideo()

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
                <ResponsiveContainer
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
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

export default VideoItemDetails
