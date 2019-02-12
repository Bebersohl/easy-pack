import React from "react"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import EStyleSheet from "react-native-extended-stylesheet"

class SignInPage extends React.Component {
  static navigationOptions = {
    title: "Sign In"
  }

  state = {
    error: "",
    email: "",
    password: ""
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleSignIn = async () => {
    const { email, password } = this.state

    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    const firebaseError = await authStore.signIn(email, password)

    if (firebaseError) return this.setState({ error: firebaseError })
  }

  render() {
    const success = this.props.navigation.getParam("success", null)
    return (
      <Layout
        navigationOptions={SignInPage.navigationOptions}
        error={this.state.error}
        success={success}
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
        <StyledButton title="Sign In" onPress={this.handleSignIn} />
        <StyledButton
          title="Create Account"
          onPress={() => this.props.navigation.navigate("CreateAccountPage")}
        />
        <StyledButton
          title="Forgot Password?"
          onPress={() => this.props.navigation.navigate("ForgotPasswordPage")}
        />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({
  buttonWrapper: {
    marginBottom: 15
  }
})

export default SignInPage
