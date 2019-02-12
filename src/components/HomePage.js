import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import navigatorService from "../navigatorService"
import userStore from "../stores/userStore"
import LoadingOverlay from "./LoadingOverlay"
import StyledButton from "./StyledButton"
import StyledText from "./StyledText"
import GearListPreivew from "./GearListPreview"
import gearStore from "../stores/gearStore"

class HomePage extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <StyledButton
        onPress={() => navigatorService.navigate("ProfilePage")}
        title="Profile"
      />
    )
  }

  render() {
    if (!userStore.isSetupComplete) {
      return <LoadingOverlay LoadingOverlayText="Hmmm" />
    }

    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        {this.renderLists()}
      </Layout>
    )
  }

  renderLists() {
    if (userStore.user.gearListIds.length === 0) {
      return (
        <TouchableOpacity
          onPress={() => navigatorService.navigate("CreateListPage")}
        >
          <View>
            <StyledText>
              You don't have any lists. Click here to create one.
            </StyledText>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <View>
        <StyledText>Your Lists</StyledText>
        {userStore.user.gearListIds.map(gearListId => {
          const gearList = gearStore.gearLists[gearListId]

          return <GearListPreivew key={gearList.id} gearList={gearList} />
        })}
        <StyledButton
          title="Create List"
          onPress={() => navigatorService.navigate("CreateListPage")}
        />
      </View>
    )
  }
}

export default view(HomePage)
