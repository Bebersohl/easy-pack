import React from "react"
import { View } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"

class ErrorMessage extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <StyledText style={{ color: "red" }}>{this.props.message}</StyledText>
      </View>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(ErrorMessage)
