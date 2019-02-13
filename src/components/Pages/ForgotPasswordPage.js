import React from "react"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"

class ForgotPasswordPage extends React.Component {
  static navigationOptions = {
    title: "Forgot Password"
  }
  state = {
    error: "",
    email: ""
  }

  componentDidMount() {
    if (!authStore.firebaseUser) navigatorService.navigate("HomePage")
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handlePasswordReset = async () => {
    const { email } = this.state

    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    const firebaseError = await authStore.sendPasswordReset(email)

    if (firebaseError) return this.setState({ error: firebaseError })
  }

  render() {
    return (
      <Layout
        navigationOptions={ForgotPasswordPage.navigationOptions}
        error={this.state.error}
      >
        <StyledInput
          value={this.state.email}
          placeholder="email"
          onChangeText={text => this.handleChangeText("email", text)}
          textContentType="emailAddress"
        />
        <StyledButton
          title="Send Password Reset"
          onPress={this.handlePasswordReset}
        />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(ForgotPasswordPage)
