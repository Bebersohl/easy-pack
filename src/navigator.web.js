import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import { stackConfig, routeConfig } from "./navigator-config";
import { view } from "react-easy-state";

const RootStack = createSwitchNavigator(routeConfig, stackConfig);

export default view(createBrowserApp(RootStack));
