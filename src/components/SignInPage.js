import React from "react"
import { Button, StyleSheet, View } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"

class SignInPage extends React.Component {
  static navigationOptions = {
    title: "Sign In or Sign Up"
  }
  render() {
    return (
      <Layout navigationOptions={SignInPage.navigationOptions}>
        <View style={styles.buttonWrapper}>
          <Button
            styles={styles.button}
            onPress={() => authStore.signIn("google")}
            title="Google"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            styles={styles.button}
            onPress={() => authStore.signIn("facebook")}
            title="Facebook"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            styles={styles.button}
            onPress={() => authStore.signIn("twitter")}
            title="Twitter"
          />
        </View>
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
