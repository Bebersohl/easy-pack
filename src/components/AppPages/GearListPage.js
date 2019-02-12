import React from "react"
import { Button } from "react-native"
import { view } from "react-easy-state"
import authStore from "../../stores/authStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import MyPie from "../MyPie"
import StyledText from "../StyledText"
import userStore from "../../stores/userStore"
import LoadingOverlay from "../LoadingOverlay"

class GearListPage extends React.Component {
  static navigationOptions = {
    title: "List"
  }

  render() {
    if (!userStore.isSetupComplete) return <LoadingOverlay />

    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)
    console.log(gearListId, userStore.gearLists)
    const gearList = userStore.gearLists[gearListId]

    return (
      <Layout navigationOptions={GearListPage.navigationOptions}>
        <StyledText f4>{gearList.name}</StyledText>
        <StyledText muted italic f6>
          Last updated {new Date(gearList.timestamp).toLocaleString()}
        </StyledText>
        <MyPie />
      </Layout>
    )
  }
}

export default view(GearListPage)
