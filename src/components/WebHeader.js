import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { view } from "react-easy-state"
import get from "lodash.get"

class WebHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>
          {get(this.props.navigationOptions, "title", "Missing Title")}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: -15,
    marginRight: -15,
    marginLeft: -15,
    marginBottom: 15,
    padding: 15,
    backgroundColor: "lightblue"
  }
})

export default view(WebHeader)
