import React from "react"
import { View } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import userStore from "../../stores/userStore"
import StyledButton from "../StyledButton"
import StyledText from "../StyledText"
import GearListPreivew from "../GearListPreview"
import InfoMessage from "../InfoMessage"
import ProfileNav from "../ProfileNav"
import SearchNav from "../SearchNav"
import LoadingOverlay from "../LoadingOverlay"
import PageTitle from "../PageTitle"

class HomePage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <PageTitle />,
      headerRight: <SearchNav />,
      headerLeft: <ProfileNav />
    }
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
      <View>
        <InfoMessage
          message="Sign in to create lists."
          buttonTitle="Sign In"
          onPress={() => navigatorService.navigate("SignInPage")}
        />
      </View>
    )
  }

  renderAuthorized() {
    // if (gearStore.isSetupComplete) return <LoadingOverlay loadingOverlayText="Fetching lists..."></LoadingOverlay>
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
