import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  LoginForm,
  ImageContainer,
  Image,
  InputLabel,
  Label,
  Input,
  ShowPassword,
  CheckBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    errorStatus: false,
    inputType: true,
  }

  onSubmitSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFail = error => {
    this.setState({errorMsg: error, errorStatus: true})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeType = () => {
    this.setState(prevState => ({inputType: !prevState.inputType}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, option)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFail(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {
            password,
            username,
            errorStatus,
            errorMsg,
            inputType,
          } = this.state
          const type = inputType ? 'password' : 'text'
          return (
            <AppContainer isDark={isDark}>
              <LoginForm onSubmit={this.onSubmitForm} isDark={isDark}>
                <ImageContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </ImageContainer>
                <InputLabel>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                </InputLabel>
                <InputLabel>
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    type={type}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputLabel>
                <ShowPassword>
                  <CheckBox
                    type="checkbox"
                    id="showPassword"
                    onClick={this.onChangeType}
                  />
                  <Label isDark={isDark} htmlFor="showPassword">
                    Show Password
                  </Label>
                </ShowPassword>
                <LoginButton type="submit">Login</LoginButton>
                {errorStatus && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
