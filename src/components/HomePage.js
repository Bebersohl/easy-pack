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
    if (!userStore.user) {
      return <LoadingOverlay />
    }

    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        <StyledText>Your Lists</StyledText>
        {userStore.user.gearLists.length === 0 && (
          <TouchableOpacity
            onPress={() => navigatorService.navigate("CreateListPage")}
          >
            <View>
              <StyledText>
                You don't have any lists. Click here to create one.
              </StyledText>
            </View>
          </TouchableOpacity>
        )}
      </Layout>
    )
  }
}

export default view(HomePage)
