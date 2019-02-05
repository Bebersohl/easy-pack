import React from "react";
import { View, Text, Button } from "react-native";

class HomePage extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate("AboutPage")}
        />
      </View>
    );
  }
}

export default HomePage;
