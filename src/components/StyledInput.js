import React from "react"
import { TextInput } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"

const StyledInput = ({ ...props }) => {
  return (
    <TextInput
      style={[styles.input, props.multiline && styles.multiline]}
      {...props}
    />
  )
}

const styles = EStyleSheet.create({
  input: {
    marginBottom: 20,
    height: 40,
    borderColor: "lightblue",
    borderWidth: 1,
    paddingRight: 5,
    paddingLeft: 5
  },
  multiline: {
    paddingTop: 10,
    marginBottom: 20,
    height: 100,
    borderColor: "lightblue",
    borderWidth: 1,
    paddingRight: 5,
    paddingLeft: 5
  }
})

export default view(StyledInput)
