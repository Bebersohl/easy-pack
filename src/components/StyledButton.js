import React from "react"
import { Button, View } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"

const StyledButton = ({ ...props }) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button {...props} />
    </View>
  )
}

const styles = EStyleSheet.create({
  buttonWrapper: {
    marginBottom: 20
  }
})

export default view(StyledButton)
