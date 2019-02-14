import React from "react"
import { View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../navigatorService"
import StyledText from "./StyledText"

const GearListPreivew = ({ gearList }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigatorService.navigate("GearListPage", {
          id: gearList.id,
          title: gearList.name
        })
      }
    >
      <View style={styles.preview}>
        <StyledText f4>{gearList.name}</StyledText>
        <StyledText muted italic f6>
          Last updated {new Date(gearList.timestamp).toLocaleString()}
        </StyledText>
      </View>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  preview: {
    padding: 15,
    borderRadius: 4,
    borderColor: "lightblue",
    borderWidth: 1,
    marginBottom: 15
  }
})

export default view(GearListPreivew)
