import React from "react"
import { View, Button } from "react-native"
import { view } from "react-easy-state"
import StyledText from "./StyledText"
import EStyleSheet from "react-native-extended-stylesheet"

const InfoMessage = ({ onPress, message, buttonTitle }) => {
  return (
    <View style={styles.infoMessage}>
      <StyledText f4 style={{ textAlign: "center", marginBottom: 10 }}>
        {message}
      </StyledText>
      <Button title={buttonTitle} onPress={onPress} />
    </View>
  )
}

const styles = EStyleSheet.create({
  infoMessage: {
    borderWidth: 1,
    borderColor: "lightblue",
    padding: 15,
    borderRadius: 4,
    width: "100%",
    justifyContent: "center"
  }
})

export default view(InfoMessage)
