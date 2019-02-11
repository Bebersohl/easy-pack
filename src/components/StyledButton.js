import React from "react"
import { Button, StyleSheet, View } from "react-native"
import { view } from "react-easy-state"

const StyledButton = ({ ...props }) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 20
  }
})

export default view(StyledButton)
