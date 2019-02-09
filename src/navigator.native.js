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

const AppStack = createStackNavigator(routeConfigApp)
const AuthStack = createStackNavigator(routeConfigAuth)

export default createAppContainer(
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
