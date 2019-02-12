import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation"
import {
  stackConfig,
  routeConfigAuth,
  routeConfigApp
} from "./navigator-config"
import AuthLoadingPage from "./components/AuthPages/AuthLoadingPage"

const AppStack = createStackNavigator(routeConfigApp)
const AuthStack = createStackNavigator(routeConfigAuth)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingPage,
      App: AppStack,
      Auth: AuthStack
    },
    stackConfig
  )
)
