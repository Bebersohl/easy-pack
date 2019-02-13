import React from "react"
import { View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import userStore from "../../stores/userStore"
import StyledButton from "../StyledButton"
import StyledText from "../StyledText"
import GearListPreivew from "../GearListPreview"
import InfoMessage from "../InfoMessage"
import authStore from "../../stores/authStore"

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
    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        {userStore.isSetupComplete
          ? this.renderAuthorized()
          : this.renderUnauthorizedView()}
      </Layout>
    )
  }

  renderUnauthorizedView() {
    return (
      <StyledText>
        <InfoMessage
          message="Sign in to create lists."
          buttonTitle="Sign In"
          onPress={() => navigatorService.navigate("SignInPage")}
        />
      </StyledText>
    )
  }

  renderAuthorized() {
    if (userStore.user.gearListIds.length === 0) {
      return (
        <InfoMessage
          message="You don't have any lists yet."
          buttonTitle="Create List"
          onPress={() => navigatorService.navigate("CreateListPage")}
        />
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
