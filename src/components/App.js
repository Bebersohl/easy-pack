import React from "react"
import Navigator from "../navigator"
import { Dimensions } from "react-native"
import { auth } from "../firebase"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import routeStore from "../stores/routeStore"
import navigatorService from "../navigatorService"
import EStyleSheet from "react-native-extended-stylesheet"

// define REM depending on screen width
const { width } = Dimensions.get("window")
const rem = width > 340 ? 18 : 16

// calc styles
EStyleSheet.build({
  $rem: rem
})

class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(authStore.handleAuthStateChanged)
  }

  render() {
    return (
      <Navigator
        ref={navigatorRef => {
          routeStore.navigatorRef = navigatorRef
          navigatorService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}

export default view(App)
