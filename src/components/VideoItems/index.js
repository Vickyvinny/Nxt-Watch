import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  ListItem,
  VideoImage,
  CardContainer,
  Profile,
  Card,
  Heading,
  Name,
  DetailsContainer,
  Detail,
} from './styledComponents'
import './index.css'

const VideoItems = props => {
  const {itemDetails} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = itemDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <>
            <ListItem>
              <Link to={`/videos/${id}`} className="link-item">
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <CardContainer>
                  <Profile src={profileImageUrl} alt="channel logo" />
                  <Card>
                    <Heading isDark={isDark}>{title}</Heading>
                    <Name>{name}</Name>
                    <DetailsContainer>
                      <Detail>{viewCount} Views</Detail>
                      <Detail>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </Detail>
                    </DetailsContainer>
                  </Card>
                </CardContainer>
              </Link>
            </ListItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItems
