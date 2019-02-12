import React from "react"
import { Button } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
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

  componentDidMount() {
    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)

    gearStore.fetchGearList(gearListId)
  }

  render() {
    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)
    console.log(gearListId, gearStore.gearLists)
    const gearList = gearStore.gearLists[gearListId]

    if (!gearList)
      return <LoadingOverlay loadingOverlayText="Fetching list..." />

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
