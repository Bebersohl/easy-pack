import React from "react"
import { Button, StyleSheet, TextInput } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"
import { validateEmail } from "../utils"

class SignInPage extends React.Component {
  static navigationOptions = {
    title: "Sign In or Sign Up"
  }

  state = {
    error: "",
    email: "",
    password: ""
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  setError = error =>
    this.setState({
      error
    })

  handleSignIn = async () => {
    const { email, password } = this.state

    if (!email) return this.setError("email is required")
    if (!password) return this.setError("password is required")
    if (!validateEmail(email)) return this.setError("email is not valid")
    if (password.length < 8)
      return this.setError("password must be 8 characters or longer")

    const error = await authStore.signIn(email, password)

    if (error) return this.setError(error)
  }

  render() {
    return (
      <Layout
        navigationOptions={SignInPage.navigationOptions}
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
        <Button title="Sign In" onPress={this.handleSignIn} />
        <Button
          title="Go to Create Account"
          onPress={() => this.props.navigation.navigate("CreateAccountPage")}
        />
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 15
  }
})

export default SignInPage
