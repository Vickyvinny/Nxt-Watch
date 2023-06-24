import {withRouter} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire, HiOutlineFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import {
  SideBarContainer,
  OptionsContainer,
  ContactsContainer,
  SocialMediaContainer,
  SocialMedia,
  Heading,
  OptionItem,
  StyledLink,
} from './styledComponents'

import './index.css'

const SideBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, onChangeActiveWindow, showSideBar} = value
      const onChangeWindow = event => {
        onChangeActiveWindow(event.target.id)
      }
      const {location} = props
      const {pathname} = location
      const pageLink = pathname

      return (
        <>
          <SideBarContainer isDark={isDark} showSideBar={showSideBar}>
            <OptionsContainer>
              <StyledLink to="/" onClick={onChangeWindow}>
                <OptionItem isDark={isDark} active={pageLink === '/'}>
                  {isDark ? (
                    <AiFillHome className="icon" />
                  ) : (
                    <AiOutlineHome className="icon" />
                  )}
                  Home
                </OptionItem>
              </StyledLink>
              <StyledLink to="/trending" onClick={onChangeWindow}>
                <OptionItem isDark={isDark} active={pageLink === '/trending'}>
                  {isDark ? (
                    <HiFire className="icon" />
                  ) : (
                    <HiOutlineFire className="icon" />
                  )}
                  Trending
                </OptionItem>
              </StyledLink>
              <StyledLink to="/gaming" onClick={onChangeWindow}>
                <OptionItem isDark={isDark} active={pageLink === '/gaming'}>
                  <SiYoutubegaming className="icon" />
                  Gaming
                </OptionItem>
              </StyledLink>
              <StyledLink to="/saved-videos" onClick={onChangeWindow}>
                <OptionItem
                  isDark={isDark}
                  active={pageLink === '/saved-videos'}
                >
                  <BiListPlus className="icon" />
                  Saved Videos
                </OptionItem>
              </StyledLink>
            </OptionsContainer>
            <ContactsContainer>
              <Heading>CONTACT US</Heading>
              <SocialMediaContainer>
                <SocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="faceBook logo"
                />
                <SocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <p>Enjoy! Now to see your channels and recommendations!</p>
            </ContactsContainer>
          </SideBarContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
