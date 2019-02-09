import React from "react"
import { Button, StyleSheet, TextInput } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"
import { validateState } from "../validation"

class DeleteAccountPage extends React.Component {
  static navigationOptions = {
    title: "Delete Account"
  }
  state = {
    error: "",
    password: "",
    confirmPassword: ""
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleDeleteAccount = async () => {
    const { password } = this.state

    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    const firebaseError = await authStore.deleteAccount(password)

    if (firebaseError) return this.setState({ error: firebaseError })
  }

  render() {
    return (
      <Layout
        navigationOptions={DeleteAccountPage.navigationOptions}
        error={this.state.error}
      >
        <TextInput
          value={this.state.password}
          placeholder="password"
          onChangeText={text => this.handleChangeText("password", text)}
          textContentType="password"
          secureTextEntry={true}
        />
        <TextInput
          value={this.state.confirmPassword}
          placeholder="confirmPassword"
          onChangeText={text => this.handleChangeText("confirmPassword", text)}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button title="Delete Account" onPress={this.handleDeleteAccount} />
      </Layout>
    )
  }
}

const styles = StyleSheet.create({})

export default DeleteAccountPage
