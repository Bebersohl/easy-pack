import React from "react"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"
import { View } from "react-native"
import _ from "lodash"

const SummaryTable = ({ gearList }) => {
  const allItems = _.flatten(
    gearList.categories.map(category => category.items)
  )

  const totals = allItems.reduce(
    (acc, item) => {
      const wornAmount = item.worn ? item.weight : 0
      const consumableAmount = item.consumable ? item.consumableAmount : 0
      const baseweightAmount = !item.worn && !item.consumable ? item.weight : 0

      return {
        weight: acc.weight + item.weight,
        price: acc.price + item.price,
        worn: acc.worn + wornAmount,
        consumable: acc.consumable + consumableAmount,
        baseweight: acc.baseweight + baseweightAmount
      }
    },
    {
      weight: 0,
      price: 0,
      worn: 0,
      consumable: 0,
      baseweight: 0
    }
  )

  const Rows = gearList.categories.map(category => {
    const coreItems = category.items.filter(
      item => !item.worn && !item.consumable
    )

    const categoryTotals = coreItems.reduce(
      (acc, item) => {
        return {
          price: acc.price + item.price,
          weight: acc.weight + item.weight
        }
      },
      { price: 0, weight: 0 }
    )

    return (
      <View
        key={category.id}
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
              backgroundColor: "#f00",
              width: 10,
              height: 10,
              borderRadius: "50%"
            }}
          />
        </StyledText>
        <StyledText style={{ flexGrow: 1 }} f7>
          {category.name}
        </StyledText>
        <StyledText style={{ flexBasis: 50 }} f7>
          ${categoryTotals.price}
        </StyledText>
        <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
          {categoryTotals.weight}g
        </StyledText>
      </View>
    )
  })

  return (
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

      {Rows}

      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "baseline",
          paddingBottom: 1
        }}
      >
        <StyledText style={{ flexBasis: 15 }} f7 />
        <StyledText
          style={{ flexGrow: 1, textAlign: "right", paddingRight: 15 }}
          f7
        >
          total
        </StyledText>
        <StyledText style={{ flexBasis: 50 }} f7>
          ${totals.price}
        </StyledText>
        <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
          {totals.weight}g
        </StyledText>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "baseline",
          paddingBottom: 1
        }}
      >
        <StyledText style={{ flexBasis: 15 }} f7 />
        <StyledText
          style={{ flexGrow: 1, textAlign: "right", paddingRight: 15 }}
          f7
        >
          consumable
        </StyledText>
        <StyledText style={{ flexBasis: 50 }} f7 />
        <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
          {totals.consumable}g
        </StyledText>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "baseline",
          paddingBottom: 1
        }}
      >
        <StyledText style={{ flexBasis: 15 }} f7 />
        <StyledText
          style={{ flexGrow: 1, textAlign: "right", paddingRight: 15 }}
          f7
        >
          worn
        </StyledText>
        <StyledText style={{ flexBasis: 50 }} f7 />
        <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
          {totals.worn}g
        </StyledText>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "baseline",
          paddingBottom: 1
        }}
      >
        <StyledText style={{ flexBasis: 15 }} f7 />
        <StyledText
          style={{ flexGrow: 1, textAlign: "right", paddingRight: 15 }}
          f7
        >
          baseweight
        </StyledText>
        <StyledText style={{ flexBasis: 50 }} f7 />
        <StyledText style={{ flexBasis: 50, textAlign: "right" }} f7>
          {totals.baseweight}g
        </StyledText>
      </View>
    </View>
  )
}

const styles = EStyleSheet.create({})

export default view(SummaryTable)
