import HomePage from "./components/HomePage"
import SignInPage from "./components/SignInPage"
import CreateAccountPage from "./components/CreateAccountPage"
import ForgotPasswordPage from "./components/ForgotPasswordPage"
import ProfilePage from "./components/ProfilePage"
import DeleteAccountPage from "./components/DeleteAccountPage"
import UpdateProfilePage from "./components/UpdateProfilePage"
import GearListPage from "./components/GearListPage"
import CreateListPage from "./components/CreateListPage"

export const routeConfigAuth = {
  SignInPage: { screen: SignInPage, path: "sign-in" },
  ForgotPasswordPage: { screen: ForgotPasswordPage, path: "forgot-password" },
  CreateAccountPage: { screen: CreateAccountPage, path: "create-account" }
}

export const routeConfigApp = {
  HomePage: { screen: HomePage },
  ProfilePage: { screen: ProfilePage, path: "profile" },
  UpdateProfilePage: { screen: UpdateProfilePage, path: "update-profile" },
  DeleteAccountPage: { screen: DeleteAccountPage, path: "delete-account" },
  GearListPage: { screen: GearListPage, path: "gear-list-page/:id" },
  CreateListPage: { screen: CreateListPage, path: "create-list" }
}

export const stackConfig = {
  initialRouteName: "AuthLoading"
}
