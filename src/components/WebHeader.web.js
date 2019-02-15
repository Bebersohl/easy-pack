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
import ProfileNav from "./ProfileNav"
import SearchNav from "./SearchNav"
import PageTitle from "./PageTitle"

class WebHeader extends React.Component {
  getBackRoute(currentRoute) {
    switch (currentRoute) {
      case "CreateAccountPage":
      case "ForgotPasswordPage":
        return "SignInPage"
      case "ProfilePage":
      case "CreateListPage":
      case "GearListPage":
      case "SignInPage":
      case "SearchListsPage":
        return "HomePage"
      case "UpdateProfilePage":
      case "DeleteAccountPage":
        return "ProfilePage"
      default:
        return ""
    }
  }

  renderLeftNav() {
    if (routeStore.currentRoute === "HomePage") {
      return <ProfileNav />
    }
    const backRoute = this.getBackRoute(routeStore.currentRoute)

    if (!backRoute) return

    return (
      <TouchableOpacity onPress={() => navigatorService.navigate(backRoute)}>
        <View style={{ marginLeft: 15 }}>
          <BackIcon />
        </View>
      </TouchableOpacity>
    )
  }

  renderRightNav() {
    if (routeStore.currentRoute !== "HomePage") return

    return <SearchNav />
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={{ flexBasis: 50 }}>{this.renderLeftNav()}</View>
        <PageTitle />
        <View
          style={{
            flexGrow: 1,
            flexBasis: "25%",
            flexDirection: "row-reverse"
          }}
        >
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
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
})

export default view(WebHeader)
