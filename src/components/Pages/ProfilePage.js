import React from "react"
import { view } from "react-easy-state"
import authStore from "../../stores/authStore"
import Layout from "../Layout"
import _ from "lodash"
import StyledButton from "../StyledButton"
import StyledText from "../StyledText"
import navigatorService from "../../navigatorService"
import PageTitle from "../PageTitle"

class ProfilePage extends React.Component {
  static navigationOptions = {
    headerTitle: <PageTitle />
  }

  componentDidMount() {
    if (!authStore.firebaseUser) navigatorService.navigate("HomePage")
  }

  render() {
    const displayName = _.get(authStore, "firebaseUser.displayName", "friend")

    return (
      <Layout navigationOptions={ProfilePage.navigationOptions}>
        <StyledText>Welcome {displayName}!</StyledText>
        <StyledButton title="Sign Out" onPress={() => authStore.signOut()} />
        <StyledButton
          title="Reset Password"
          onPress={() =>
            authStore.sendPasswordReset(authStore.firebaseUser.email)
          }
        />
        {/* <StyledButton
          title="Update Profile"
          onPress={() => this.props.navigation.navigate("UpdateProfilePage")}
        />
        <StyledButton
          title="Delete Account"
          onPress={() => this.props.navigation.navigate("DeleteAccountPage")}
        /> */}
      </Layout>
    )
  }
}

export default view(ProfilePage)
