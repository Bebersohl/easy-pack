import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import SignInPage from "./components/SignInPage"
import CreateAccountPage from "./components/CreateAccountPage"
import ForgotPasswordPage from "./components/ForgotPasswordPage"
import ProfilePage from "./components/ProfilePage"
import DeleteAccountPage from "./components/DeleteAccountPage"
import UpdateProfilePage from "./components/UpdateProfilePage"

export const routeConfig = {
  HomePage: { screen: HomePage },
  SignInPage: { screen: SignInPage, path: "sign-in" },
  AboutPage: { screen: AboutPage, path: "about/:id" },
  CreateAccountPage: { screen: CreateAccountPage, path: "create-account" },
  ForgotPasswordPage: { screen: ForgotPasswordPage, path: "forgot-password" },
  ProfilePage: { screen: ProfilePage, path: "profile" },
  UpdateProfilePage: { screen: UpdateProfilePage, path: "update-profile" },
  DeleteAccountPage: { screen: DeleteAccountPage, path: "delete-profile" }
}

export const stackConfig = {
  initialRouteName: "HomePage"
}
