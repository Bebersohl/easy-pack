import React from "react";
import { View, Text, Button } from "react-native";
import { Subscribe } from "unstated";
import AuthContainer from "../containers/AuthContainer";

class HomePage extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <Subscribe to={[AuthContainer]}>
        {Auth => (
          <View>
            {Auth.state.firebaseUser ? (
              <Text>Logged in</Text>
            ) : (
              <Text>Logged out</Text>
            )}
            <Text>HomePage</Text>
            <Button
              title="Go to About"
              onPress={() => this.props.navigation.navigate("AboutPage")}
            />
            <Button title="Login" onPress={() => Auth.signIn("google")} />
            <Button title="Logout" onPress={() => Auth.signOut()} />
          </View>
        )}
      </Subscribe>
    );
  }
}

export default HomePage;
