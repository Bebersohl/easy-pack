import React from "react"
import { Text, Button, View } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import navigatorService from "../navigatorService"
import userStore from "../stores/userStore"

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
    if (!userStore.user) {
      return <View />
    }

    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        <Text>Your Lists</Text>
        {userStore.user.lists.length === 0 && (
          <View onPress={() => {}}>
            <Text>You don't have any lists. Click here to create one.</Text>
          </View>
        )}
      </Layout>
    )
  }
}

export default view(HomePage)
