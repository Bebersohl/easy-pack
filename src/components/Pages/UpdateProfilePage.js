import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"
import PageTitle from "../PageTitle"

class UpdateAccountPage extends React.Component {
  static navigationOptions = {
    headerTitle: <PageTitle />
  }
  state = {
    error: "",
    displayName: ""
  }

  componentDidMount() {
    if (!authStore.firebaseUser) navigatorService.navigate("HomePage")
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleUpdateProfile = async () => {
    const { displayName } = this.state

    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    const firebaseError = await authStore.updateProfile(displayName)

    if (firebaseError) return this.setState({ error: firebaseError })
  }

  render() {
    return (
      <Layout
        navigationOptions={UpdateAccountPage.navigationOptions}
        error={this.state.error}
      >
        <StyledInput
          value={this.state.displayName}
          placeholder="New display name"
          onChangeText={text => this.handleChangeText("displayName", text)}
        />
        <StyledButton
          title="Update Profile"
          onPress={this.handleUpdateProfile}
        />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(UpdateAccountPage)
