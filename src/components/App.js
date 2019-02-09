import React from "react"
import Navigator from "../navigator"
import { auth } from "../firebase"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import navigatorService from "../navigatorService"

class App extends React.Component {
  componentDidMount() {
    // move this to authStore
    // auth.getRedirectResult().then(authStore.handleGetRedirectResult);
    auth.onAuthStateChanged(authStore.handleAuthStateChanged)
  }

  render() {
    return (
      <Navigator
        ref={navigatorRef => {
          navigatorService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}

export default view(App)
