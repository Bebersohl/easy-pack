import React from "react"
import { TouchableOpacity, TextInput } from "react-native"
import { view, store } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"

const state = store({})

const EditableField = ({ item, style, field, postfix }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        state[item.id] = field
      }}
    >
      {state[item.id] === field ? (
        <TextInput
          style={{ backgroundColor: "red" }}
          value={item[field]}
          onBlur={() => (state[item.id] = false)}
          onChangeText={text => (item[field] = text)}
        />
      ) : (
        <StyledText f7>
          {item[field]}
          {postfix}
        </StyledText>
      )}
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({})

export default view(EditableField)
