import React from "react"
import { Text, Button } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import navigatorService from "../navigatorService"
import PieChartExample from "./PieChart"

class HomePage extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <Button
        onPress={() => navigatorService.navigate("ProfilePage")}
        title="Profile"
      />
    )
  }

  render() {
    console.log("authStore.firebaseUser", authStore.firebaseUser)
    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        <Text>HomePage</Text>
        <PieChartExample />
        <Text>{authStore.firebaseUser ? "logged in" : "logged out"}</Text>
      </Layout>
    )
  }
}

export default view(HomePage)
