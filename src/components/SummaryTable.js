import React from "react"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"
import { View } from "react-native"

const SummaryTable = () => (
  <View style={{ marginTop: 30 }}>
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "baseline",
        paddingBottom: 1
      }}
    >
      <StyledText style={{ flexBasis: 15 }} f7 />
      <StyledText style={{ flexGrow: 1 }} f7>
        Category
      </StyledText>
      <StyledText style={{ flexBasis: 50 }} f7>
        Price
      </StyledText>
      <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
        Weight
      </StyledText>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
      }}
    >
      <StyledText style={{ flexBasis: 15 }} f7>
        <View
          style={{
            background: "#f00",
            width: 10,
            height: 10,
            borderRadius: "50%"
          }}
        />
      </StyledText>
      <StyledText style={{ flexGrow: 1 }} f7>
        Shelter
      </StyledText>
      <StyledText style={{ flexBasis: 50 }} f7>
        $2000
      </StyledText>
      <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
        12g
      </StyledText>
    </View>
  </View>
)

const styles = EStyleSheet.create({})

export default view(SummaryTable)
