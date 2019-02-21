import React from "react"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import ConsumableIcon from "./Icons/ConsumableIcon"
import WornIcon from "./Icons/WornIcon"
import StyledText from "./StyledText"
import { View } from "react-native"

const GearTable = () => (
  <View style={{ marginTop: 30 }}>
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
      }}
    >
      <StyledText style={{ flexGrow: 1, fontWeight: "500" }}>Pack</StyledText>
      <StyledText style={{ flexBasis: 20 }} f7 />
      <StyledText style={{ flexBasis: 20 }} f7 />
      <StyledText style={{ flexBasis: 70 }} f7>
        Weight
      </StyledText>
      <StyledText style={{ flexBasis: 45 }} f7>
        Price
      </StyledText>
      <StyledText style={{ flexBasis: 25, textAlign: "right" }} f7>
        Qty
      </StyledText>
    </View>
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
      }}
    >
      <StyledText style={{ flexGrow: 1 }} f7>
        Simple Pack
      </StyledText>
      <View
        style={{
          flexBasis: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
        f7
      >
        <WornIcon />
      </View>
      <View
        style={{
          flexBasis: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
        f7
      >
        <ConsumableIcon />
      </View>
      <StyledText style={{ flexBasis: 70 }} f7>
        1234.56g
      </StyledText>
      <StyledText style={{ flexBasis: 45 }} f7>
        $2000
      </StyledText>
      <StyledText style={{ flexBasis: 25, textAlign: "right" }} f7>
        1
      </StyledText>
    </View>
  </View>
)

const styles = EStyleSheet.create({})

export default view(GearTable)
