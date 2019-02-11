import React, { Component } from "react"
import { VictoryPie } from "victory-native"
import { View } from "react-native"
export default class PieChart extends Component {
  render() {
    return (
      <View>
        <VictoryPie />
      </View>
    )
  }
}
