import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  stackConfig,
  routeConfigApp,
  routeConfigAuth
} from "./navigator-config"

const AppStack = createSwitchNavigator(routeConfigApp)

export default createBrowserApp(AppStack)
