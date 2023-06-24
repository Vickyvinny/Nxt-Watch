import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  ListItem,
  VideoImage,
  CardContainer,
  Card,
  Heading,
  DetailsContainer,
  Detail,
} from './styledComponents'
import './index.css'

const GamingVideoItem = props => {
  const {itemDetails} = props
  const {id, thumbnailUrl, title, viewCount} = itemDetails
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
                  <Card>
                    <Heading isDark={isDark}>{title}</Heading>
                    <DetailsContainer>
                      <Detail>{viewCount}</Detail>
                      <Detail>Watching Worldwide</Detail>
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

export default GamingVideoItem
