import React from "react"
import uiStore from "../stores/uiStore"
import LoadingOverlay from "./LoadingOverlay"
import { View, Platform, Text } from "react-native"
import { view } from "react-easy-state"
import WebHeader from "./WebHeader.web"
import ErrorMessage from "./ErrorMessage"
import SuccessMessage from "./SuccessMessage"
import StyledText from "./StyledText"
import gearStore from "../stores/gearStore"
import routeStore from "../stores/routeStore"
import _ from "lodash"

const getTitle = route => {
  switch (route) {
    case "HomePage":
      return "Home"
    case "SearchListsPage":
      return "Search Lists"
    case "SignInPage":
      return "Sign In"
    case "ForgotPasswordPage":
      return "Forgot Password"
    case "CreateAccountPage":
      return "Create Account"
    case "ProfilePage":
      return "Profile"
    case "UpdateProfilePage":
      return "Update Profile"
    case "DeleteAccountPage":
      return "Delete Account"
    case "CreateListPage":
      return "Create List"
    case "GearListPage": {
      return _.get(
        gearStore,
        ["gearLists", gearStore.activeGearListId, "name"],
        "DURR"
      )
    }

    default:
      return "Easy Pack"
  }
}

const PageTitle = ({ title }) => {
  return (
    <View>
      <StyledText style={{ fontWeight: "500" }}>
        {getTitle(routeStore.currentRoute)}
      </StyledText>
    </View>
  )
}

export default view(PageTitle)
