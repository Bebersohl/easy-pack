import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  stackConfig,
  routeConfigApp,
  routeConfigAuth
} from "./navigator-config"
import AuthLoadingPage from "./components/AuthPages/AuthLoadingPage"

const AppStack = createSwitchNavigator(routeConfigApp)
const AuthStack = createSwitchNavigator(routeConfigAuth)

export default createBrowserApp(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingPage,
      App: AppStack,
      Auth: AuthStack
    },
    stackConfig
  )
)
