import React from "react"
import { Button, StyleSheet, View, TextInput } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"
import { validateEmail } from "../utils"

class CreateAccountPage extends React.Component {
  static navigationOptions = {
    title: "Create Account"
  }
  state = {
    error: "",
    email: "",
    password: "",
    confirmPassword: "",
    displayName: ""
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  setError = error =>
    this.setState({
      error
    })

  handleCreateAccount = async () => {
    const { email, password, confirmPassword, displayName } = this.state

    if (!email) return this.setError("email is required")
    if (!password) return this.setError("password is required")
    if (!validateEmail(email)) return this.setError("email is not valid")
    if (!confirmPassword) return this.setError("confirm password is required")
    if (!displayName) return this.setError("display name is required")
    if (password.length < 8)
      return this.setError("password must be 8 characters or longer")
    if (password !== confirmPassword)
      return this.setError("passwords must match")

    const error = await authStore.createAccount(email, password)

    if (error) return this.setError(error)
  }

  render() {
    return (
      <Layout
        navigationOptions={CreateAccountPage.navigationOptions}
        error={this.state.error}
      >
        <TextInput
          value={this.state.email}
          placeholder="email"
          onChangeText={text => this.handleChangeText("email", text)}
          textContentType="emailAddress"
        />
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
        <TextInput
          value={this.state.displayName}
          placeholder="displayName"
          onChangeText={text => this.handleChangeText("displayName", text)}
        />
        <Button title="Create Account" onPress={this.handleCreateAccount} />
      </Layout>
    )
  }
}

const styles = StyleSheet.create({})

export default CreateAccountPage
