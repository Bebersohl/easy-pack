import React from "react"
import { Text, Button } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import navigatorService from "../navigatorService"
import MyPie from "./MyPie"

class GearListPage extends React.Component {
  static navigationOptions = {
    title: "Home"
  }

  render() {
    return (
      <Layout navigationOptions={GearListPage.navigationOptions}>
        <Text>GearListPage</Text>
        <MyPie />
      </Layout>
    )
  }
}

export default view(GearListPage)
