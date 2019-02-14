import { createStackNavigator, createAppContainer } from "react-navigation"
import { stackConfig, routeConfigApp } from "./navigator-config"

const AppStack = createStackNavigator(routeConfigApp)

export default createAppContainer(AppStack, stackConfig)
