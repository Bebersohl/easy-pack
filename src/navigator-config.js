import HomePage from "./components/Pages/HomePage"
import SignInPage from "./components/Pages/SignInPage"
import CreateAccountPage from "./components/Pages/CreateAccountPage"
import ForgotPasswordPage from "./components/Pages/ForgotPasswordPage"
import ProfilePage from "./components/Pages/ProfilePage"
import DeleteAccountPage from "./components/Pages/DeleteAccountPage"
import UpdateProfilePage from "./components/Pages/UpdateProfilePage"
import GearListPage from "./components/Pages/GearListPage"
import CreateListPage from "./components/Pages/CreateListPage"
import SearchListsPage from "./components/Pages/SearchListsPage"

export const routeConfigApp = {
  HomePage: {
    screen: HomePage,
    path: ""
  },
  SearchListsPage: { screen: SearchListsPage, path: "search-lists" },
  SignInPage: { screen: SignInPage, path: "sign-in" },
  ForgotPasswordPage: { screen: ForgotPasswordPage, path: "forgot-password" },
  CreateAccountPage: { screen: CreateAccountPage, path: "create-account" },
  ProfilePage: { screen: ProfilePage, path: "profile" },
  UpdateProfilePage: { screen: UpdateProfilePage, path: "update-profile" },
  DeleteAccountPage: { screen: DeleteAccountPage, path: "delete-account" },
  GearListPage: { screen: GearListPage, path: "gear-list-page/:id" },
  CreateListPage: { screen: CreateListPage, path: "create-list" }
}

export const stackConfig = {
  initialRouteName: "HomePage",
  initialRouteParams: { isAuthorized: false }
}
