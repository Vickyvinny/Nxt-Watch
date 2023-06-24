import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
    activeWindow: 'HOME',
    showSideBar: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onClickHamBurger = () => {
    this.setState(prevState => ({showSideBar: !prevState.showSideBar}))
  }

  onChangeActiveWindow = id => {
    this.setState({activeWindow: id})
  }

  onClickSaveVideo = videoDetails => {
    const {id} = videoDetails
    const {savedVideosList} = this.state
    let updatedVideos = savedVideosList
    const video = savedVideosList.find(each => each.id === id)
    if (video === undefined) {
      updatedVideos.push(videoDetails)
    } else {
      updatedVideos = savedVideosList.filter(each => each.id !== id)
    }
    this.setState({savedVideosList: updatedVideos})
  }

  render() {
    const {isDark, savedVideosList, activeWindow, showSideBar} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          onClickSaveVideo: this.onClickSaveVideo,
          onChangeActiveWindow: this.onChangeActiveWindow,
          activeWindow,
          showSideBar,
          onClickHamBurger: this.onClickHamBurger,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
