import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { view } from "react-easy-state"
import _ from "lodash"
import navigatorService from "../navigatorService"

class WebHeader extends React.Component {
  getRightNav(currentRoute) {
    switch (currentRoute) {
      case "HomePage":
        return { route: "ProfilePage", title: "Profile" }
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
        return "HomePage"
      default:
        return ""
    }
  }

  renderBack() {
    const currentRoute = navigatorService.getCurrentRoute()

    const backRoute = this.getBackRoute(
      _.get(currentRoute, "routeName", "HomePage")
    )

    if (!backRoute) return

    return (
      <Text
        style={{ textAlign: "left" }}
        onPress={() => navigatorService.navigate(backRoute)}
      >
        Back
      </Text>
    )
  }

  renderRightNav() {
    const currentRoute = navigatorService.getCurrentRoute()

    const rightNav = this.getRightNav(
      _.get(currentRoute, "routeName", "HomePage")
    )

    if (!rightNav) return

    return (
      <Text
        style={{ textAlign: "right" }}
        onPress={() => navigatorService.navigate(rightNav.route)}
      >
        {rightNav.title}
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={{ flexGrow: 1, flexBasis: "25%" }}>
          {this.renderBack()}
        </View>
        <Text
          style={{
            flexGrow: 1,
            flexBasis: "50%",
            textAlign: "center",
            fontWeight: "500"
          }}
        >
          {_.get(this.props.navigationOptions, "title", "Easy-Pack")}
        </Text>
        <View style={{ flexGrow: 1, flexBasis: "25%" }}>
          {this.renderRightNav()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
