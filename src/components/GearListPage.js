import React from "react"
import { Button } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import navigatorService from "../navigatorService"
import MyPie from "./MyPie"
import StyledText from "./StyledText"

class GearListPage extends React.Component {
  static navigationOptions = {
    title: "Home"
  }

  render() {
    return (
      <Layout navigationOptions={GearListPage.navigationOptions}>
        <StyledText>GearListPage</StyledText>
        <MyPie />
      </Layout>
    )
  }
}

export default view(GearListPage)
