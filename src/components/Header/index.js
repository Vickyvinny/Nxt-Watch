import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  Logo,
  ButtonContainer,
  Image,
  LogoutButton,
  PopupButton,
  PopupContainer,
  PopupButtonContainer,
  Heading,
  ThemeButton,
  HamButton,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, toggleTheme, onClickHamBurger} = value
        const logOutBtn = isDark ? '#ffff' : '#3b82f6'
        const text = isDark ? '#3b82f6' : '#ffff'
        const logo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onShowMenu = () => {
          onClickHamBurger()
        }
        return (
          <HeaderContainer isDark={isDark}>
            <Link to="/">
              <Logo src={logo} alt="website logo" />
            </Link>
            <ButtonContainer isDark={isDark}>
              <ThemeButton data-testid="theme" typeButton>
                {isDark ? (
                  <BiSun
                    onClick={toggleTheme}
                    style={{fontSize: '28px', color: 'white'}}
                  />
                ) : (
                  <FaMoon
                    onClick={toggleTheme}
                    style={{fontSize: '28px'}}
                    data-testid="theme"
                  />
                )}
              </ThemeButton>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <HamButton isDark={isDark} onClick={onShowMenu}>
                <GiHamburgerMenu />
              </HamButton>
              <Popup
                modal
                trigger={
                  <div>
                    <LogoutButton
                      type="button"
                      logOutBtn={logOutBtn}
                      text={text}
                    >
                      Logout
                    </LogoutButton>
                    <FiLogOut className="logout-btn" />
                  </div>
                }
                className="popup-content"
              >
                {close => (
                  <>
                    <PopupContainer isDark={isDark}>
                      <Heading>Are you sure, you want to logout</Heading>
                      <PopupButtonContainer>
                        <PopupButton
                          cancel
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupButton>

                        <PopupButton type="button" onClick={onClickLogout}>
                          Confirm
                        </PopupButton>
                      </PopupButtonContainer>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </ButtonContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
