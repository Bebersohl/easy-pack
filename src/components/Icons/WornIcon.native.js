import React from "react"
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from "react-native-svg"
import { view } from "react-easy-state"

const WornIcon = props => {
  return (
    <Svg
      className="svg-inline--fa fa-tshirt fa-w-20"
      height="15"
      role="img"
      width="17"
      viewBox="0 0 640 512"
      data-prefix="fas"
      data-icon="tshirt"
    >
      <Path
        d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"
        fill="black"
      />
    </Svg>
  )
}

export default view(WornIcon)
