// NavigationService.js

import { NavigationActions } from "@react-navigation/core"
import { Platform } from "react-native"

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  const dispatchFn = Platform.OS === "web" ? "_dispatch" : "dispatch"
  _navigator[dispatchFn](
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator
}
