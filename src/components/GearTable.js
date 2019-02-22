import React from "react"
import { TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import ConsumableIcon from "./Icons/ConsumableIcon"
import WornIcon from "./Icons/WornIcon"
import StyledText from "./StyledText"
import { View } from "react-native"
import shortid from "shortid"

const GearTable = ({ category }) => {
  const Rows = category.items.map(item => (
    <View
      key={item.id}
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
        {item.name}
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
        {item.weight}
      </StyledText>
      <StyledText style={{ flexBasis: 45 }} f7>
        {item.price}
      </StyledText>
      <StyledText style={{ flexBasis: 25, textAlign: "right" }} f7>
        {item.qty}
      </StyledText>
    </View>
  ))

  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between"
        }}
      >
        <StyledText style={{ flexGrow: 1, fontWeight: "500" }}>
          {category.name}
        </StyledText>
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

      {Rows}

      <TouchableOpacity
        onPress={() =>
          category.items.push({
            name: "New Item",
            id: shortid.generate(),
            weight: 23,
            description: "new item",
            worn: true,
            consumable: true,
            price: 43,
            qty: 1,
            link: "https://www.google.com"
          })
        }
      >
        <StyledText>Add a new item</StyledText>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({})

export default view(GearTable)
