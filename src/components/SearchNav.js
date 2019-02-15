import React from "react"
import { View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import StyledText from "./StyledText"
import navigatorService from "../navigatorService"

const SearchNav = () => {
  return (
    <View style={{ marginRight: 15 }}>
      <TouchableOpacity
        onPress={() => navigatorService.navigate("SearchListsPage")}
      >
        <StyledText style={{ color: "#007AFF" }}>Search</StyledText>
      </TouchableOpacity>
    </View>
  )
}

export default view(SearchNav)
