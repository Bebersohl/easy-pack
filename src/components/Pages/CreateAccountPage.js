import React from "react"
import { View } from "react-native"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"

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

  componentDidMount() {
    if (authStore.firebaseUser) navigatorService.navigate("HomePage")
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleCreateAccount = async () => {
    const { email, password, displayName } = this.state

    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    const firebaseError = await authStore.createAccount(
      email,
      password,
      displayName
    )

    if (firebaseError) return this.setState({ error: firebaseError })
  }

  render() {
    return (
      <Layout
        navigationOptions={CreateAccountPage.navigationOptions}
        error={this.state.error}
      >
        <StyledInput
          value={this.state.email}
          placeholder="email"
          onChangeText={text => this.handleChangeText("email", text)}
          textContentType="emailAddress"
        />
        <StyledInput
          value={this.state.password}
          placeholder="password"
          onChangeText={text => this.handleChangeText("password", text)}
          textContentType="password"
          secureTextEntry={true}
        />
        <StyledInput
          value={this.state.confirmPassword}
          placeholder="confirmPassword"
          onChangeText={text => this.handleChangeText("confirmPassword", text)}
          textContentType="password"
          secureTextEntry={true}
        />
        <StyledInput
          value={this.state.displayName}
          placeholder="displayName"
          onChangeText={text => this.handleChangeText("displayName", text)}
        />
        <StyledButton
          title="Create Account"
          onPress={this.handleCreateAccount}
        />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(CreateAccountPage)
