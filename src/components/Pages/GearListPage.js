import React from "react"
import { Button, Switch, View, Image } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import MyPie from "../MyPie"
import StyledText from "../StyledText"
import userStore from "../../stores/userStore"
import LoadingOverlay from "../LoadingOverlay"
import ConsumableIcon from "../Icons/ConsumableIcon"
import WornIcon from "../Icons/WornIcon"
import GearListTitle from "../PageTitle"
import PageTitle from "../PageTitle"
import GearTable from "../GearTable"
import SummaryTable from "../SummaryTable"

class GearListPage extends React.Component {
  static navigationOptions = {
    headerTitle: <PageTitle />
  }

  componentDidMount() {
    const { navigation } = this.props

    const gearListId = navigation.getParam("id", null)

    gearStore.activeGearListId = gearListId

    gearStore.fetchGearList(gearListId)
  }

  render() {
    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)
    const gearList = gearStore.gearLists[gearListId]

    if (!gearList) {
      return <LoadingOverlay loadingOverlayText="Fetching list..." />
    }

    return (
      <Layout navigationOptions={GearListPage.navigationOptions}>
        <StyledText muted italic f6>
          Last updated {new Date(gearList.timestamp).toLocaleString()}
        </StyledText>
        {!!gearList.description && (
          <StyledText>{gearList.description}</StyledText>
        )}
        <Switch />

        <SummaryTable />

        <GearTable />

        <MyPie />
      </Layout>
    )
  }
}

export default view(GearListPage)
