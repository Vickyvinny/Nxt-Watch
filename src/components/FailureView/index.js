import ThemeContext from '../../context/ThemeContext'

import {
  FailureContainer,
  ErrorMsg,
  Suggestion,
  FailureImage,
  RetryButtonInFailure,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props
  const onClickRetryButton = () => {
    onClickRetry()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={failureImg} alt="failure view" />
            <ErrorMsg darkMode={isDark}>Oops! Something Went Wrong</ErrorMsg>
            <Suggestion darkMode={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </Suggestion>
            <RetryButtonInFailure type="button" onClick={onClickRetryButton}>
              Retry
            </RetryButtonInFailure>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
