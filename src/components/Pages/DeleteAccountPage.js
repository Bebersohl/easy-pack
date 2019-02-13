import React from "react"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"

class DeleteAccountPage extends React.Component {
  static navigationOptions = {
    title: "Delete Account"
  }
  state = {
    error: "",
    password: "",
    confirmPassword: ""
  }

  componentDidMount() {
    if (!authStore.firebaseUser) navigatorService.navigate("HomePage")
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
        <StyledButton
          title="Delete Account"
          onPress={this.handleDeleteAccount}
        />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(DeleteAccountPage)
