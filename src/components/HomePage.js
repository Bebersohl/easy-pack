import React from "react";
import { Text, Button } from "react-native";
import { view } from "react-easy-state";
import authStore from "../stores/authStore";
import Layout from "../components/Layout";

class HomePage extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    console.log("authStore.firebaseUser", authStore.firebaseUser);
    return (
      <Layout>
        <Text>HomePage</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate("AboutPage")}
        />
        <Text>{authStore.firebaseUser ? "logged in" : "logged out"}</Text>
        <Button onPress={() => authStore.signIn("google")} title="Sign in" />
        <Button onPress={() => authStore.signOut()} title="Sign out" />
      </Layout>
    );
  }
}

export default view(HomePage);
