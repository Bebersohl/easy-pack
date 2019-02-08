import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import SignInPage from "./components/SignInPage"

export const routeConfig = {
  HomePage: { screen: HomePage },
  SignInPage: { screen: SignInPage, path: "sign-in" },
  AboutPage: { screen: AboutPage, path: "about/:id" }
}

export const stackConfig = {
  initialRouteName: "HomePage"
}
