import HomePage from "./components/AppPages/HomePage"
import SignInPage from "./components/AuthPages/SignInPage"
import CreateAccountPage from "./components/AuthPages/CreateAccountPage"
import ForgotPasswordPage from "./components/AuthPages/ForgotPasswordPage"
import ProfilePage from "./components/AppPages/ProfilePage"
import DeleteAccountPage from "./components/AppPages/DeleteAccountPage"
import UpdateProfilePage from "./components/AppPages/UpdateProfilePage"
import GearListPage from "./components/AppPages/GearListPage"
import CreateListPage from "./components/AppPages/CreateListPage"

export const routeConfigAuth = {
  SignInPage: { screen: SignInPage, path: "sign-in" },
  ForgotPasswordPage: { screen: ForgotPasswordPage, path: "forgot-password" },
  CreateAccountPage: { screen: CreateAccountPage, path: "create-account" }
}

export const routeConfigApp = {
  HomePage: { screen: HomePage, path: "home-page" },
  ProfilePage: { screen: ProfilePage, path: "profile" },
  UpdateProfilePage: { screen: UpdateProfilePage, path: "update-profile" },
  DeleteAccountPage: { screen: DeleteAccountPage, path: "delete-account" },
  GearListPage: { screen: GearListPage, path: "gear-list-page/:id" },
  CreateListPage: { screen: CreateListPage, path: "create-list" }
}

export const stackConfig = {
  initialRouteName: "AuthLoading"
}
