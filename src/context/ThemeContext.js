import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideosList: [],
  onClickSaveVideo: () => {},
  onChangeActiveWindow: () => {},
  activeWindow: '',
  onClickHamBurger: () => {},
  showSideBar: false,
})

export default ThemeContext
