import React, { Component } from "react"
import { VictoryPie } from "victory-native"
import { View } from "react-native"
import { view } from "react-easy-state"

class PieChart extends Component {
  render() {
    return (
      <View>
        <VictoryPie />
      </View>
    )
  }
}

export default view(PieChart)
