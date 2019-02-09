import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { view } from "react-easy-state"

class ErrorMessage extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default view(ErrorMessage)
