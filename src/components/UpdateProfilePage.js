import React from "react"
import { StyleSheet, View } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"
import { validateState } from "../validation"
import StyledInput from "./StyledInput"
import StyledButton from "./StyledButton"

class UpdateAccountPage extends React.Component {
  static navigationOptions = {
    title: "Update Profile"
  }
  state = {
    error: "",
    displayName: ""
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

const styles = StyleSheet.create({})

export default UpdateAccountPage
