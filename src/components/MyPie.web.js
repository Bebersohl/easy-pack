import React, { Component } from "react"
import { VictoryPie } from "victory"
import { view } from "react-easy-state"

class PieChart extends Component {
  render() {
    return <VictoryPie />
  }
}

export default view(PieChart)
