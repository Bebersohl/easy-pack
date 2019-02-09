import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  stackConfig,
  routeConfigApp,
  routeConfigAuth
} from "./navigator-config"
import { view } from "react-easy-state"

const AppStack = createSwitchNavigator(routeConfigApp)
const AuthStack = createSwitchNavigator(routeConfigAuth)

export default createBrowserApp(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      // initialRouteName: 'AuthLoading',
    }
  )
)
