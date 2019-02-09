import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import SignInPage from "./components/SignInPage"
import CreateAccountPage from "./components/CreateAccountPage"

export const routeConfig = {
  HomePage: { screen: HomePage },
  SignInPage: { screen: SignInPage, path: "sign-in" },
  AboutPage: { screen: AboutPage, path: "about/:id" },
  CreateAccountPage: { screen: CreateAccountPage, path: "create-account" }
}

export const stackConfig = {
  initialRouteName: "HomePage"
}
