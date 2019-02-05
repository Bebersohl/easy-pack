import React from "react";
import { View, Text, Button } from "react-native";

class AboutPage extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <Text>AboutPage</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("HomePage")}
        />
      </View>
    );
  }
}

export default AboutPage;
