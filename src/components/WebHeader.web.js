import React from "react"
import { View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import _ from "lodash"
import navigatorService from "../navigatorService"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"
import routeStore from "../stores/routeStore"
import authStore from "../stores/authStore"
import BackIcon from "./Icons/BackIcon.web"

class WebHeader extends React.Component {
  getRightNav(currentRoute) {
    switch (currentRoute) {
      case "HomePage": {
        if (!authStore.firebaseUser) {
          return { route: "SignInPage", title: "Sign In" }
        }

        return { route: "ProfilePage", title: "Profile" }
      }
      default:
        return null
    }
  }

  getBackRoute(currentRoute) {
    switch (currentRoute) {
      case "CreateAccountPage":
      case "ForgotPasswordPage":
        return "SignInPage"
      case "ProfilePage":
      case "CreateListPage":
      case "GearListPage":
        return "HomePage"
      case "UpdateProfilePage":
      case "DeleteAccountPage":
        return "ProfilePage"
      default:
        return ""
    }
  }

  renderBack() {
    const backRoute = this.getBackRoute(routeStore.currentRoute)

    if (!backRoute) return

    return (
      <TouchableOpacity onPress={() => navigatorService.navigate(backRoute)}>
        <BackIcon />
      </TouchableOpacity>
    )
  }

  renderRightNav() {
    const rightNav = this.getRightNav(routeStore.currentRoute)

    if (!rightNav) return

    return (
      <StyledText
        style={{ textAlign: "right" }}
        onPress={() => navigatorService.navigate(rightNav.route)}
      >
        {rightNav.title}
      </StyledText>
    )
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={{ flexGrow: 1, flexBasis: "25%" }}>
          {this.renderBack()}
        </View>
        <StyledText
          style={{
            flexGrow: 1,
            flexBasis: "50%",
            textAlign: "center",
            fontWeight: "500"
          }}
        >
          {_.get(this.props.navigationOptions, "title", "Easy-Pack")}
        </StyledText>
        <View style={{ flexGrow: 1, flexBasis: "25%" }}>
          {this.renderRightNav()}
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  header: {
    marginTop: -15,
    marginRight: -15,
    marginLeft: -15,
    marginBottom: 15,
    padding: 15,
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
})

export default view(WebHeader)
