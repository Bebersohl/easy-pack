import React from "react"
import { Text, Button } from "react-native"
import { view } from "react-easy-state"
import authStore from "../stores/authStore"
import Layout from "../components/Layout"
import get from "lodash.get"

class ProfilePage extends React.Component {
  static navigationOptions = {
    title: "Profile"
  }

  render() {
    const displayName = get(authStore, "firebaseUser.displayName", "friend")

    return (
      <Layout navigationOptions={ProfilePage.navigationOptions}>
        <Text>Welcome {displayName}!</Text>
        <Button title="Sign Out" onPress={() => authStore.signOut()} />
        <Button
          title="Reset Password"
          onPress={() =>
            authStore.sendPasswordReset(authStore.firebaseUser.email)
          }
        />
        <Button
          title="Update Profile"
          onPress={() => this.props.navigation.navigate("UpdateProfilePage")}
        />
        <Button
          title="Delete Account"
          onPress={() => this.props.navigation.navigate("DeleteAccountPage")}
        />
      </Layout>
    )
  }
}

export default view(ProfilePage)
